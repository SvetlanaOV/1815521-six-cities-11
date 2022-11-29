import {createSelector} from '@reduxjs/toolkit';
import {NameSpace} from '../../components/const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getCity = (state: State) => state[NameSpace.Action].city;
export const getSortType = (state: State) => state[NameSpace.Action].sortType;

export const getOffersByCity = createSelector(
  [getOffers, getCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city)
);
