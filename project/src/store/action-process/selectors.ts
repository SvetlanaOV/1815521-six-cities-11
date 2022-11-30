import {createSelector} from '@reduxjs/toolkit';
import {NameSpace} from '../../components/const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';
import {SortType} from '../../components/const';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getCity = (state: State) => state[NameSpace.Action].city;
export const getSortType = (state: State) => state[NameSpace.Action].sortType;
export const getHandlerStatus = (state: State) => state[NameSpace.Action].sortType;

export const getOffersByCity = createSelector(
  [getOffers, getCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const getSortedOffers = createSelector(
  [getOffers, getSortType],
  (offers, currentSortType) =>{
    switch (currentSortType) {
      case SortType.Popular:
        return offers;
      case SortType.LowToHigh:
        return offers.sort((offerA, offerB) => offerA.price - offerB.price);
      case SortType.HighToLow:
        return offers.sort((offerA, offerB) => offerB.price - offerA.price);
      case SortType.TopRatedFirst:
        return offers.sort((offerA, offerB) => offerB.rating - offerA.rating);
    }
  }
);
