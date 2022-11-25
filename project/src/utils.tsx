import dayjs from 'dayjs';
import {Offer} from './types/offer';
import {SortType} from './components/const';

export const sortByOption = (offers: Offer[], activeSortType: string) => {
  switch (activeSortType) {
    case SortType.Popular:
      return offers;
    case SortType.LowToHigh:
      return offers.sort((offerA, offerB) => offerA.price - offerB.price);
    case SortType.HighToLow:
      return offers.sort((offerA, offerB) => offerB.price - offerA.price);
    case SortType.TopRatedFirst:
      return offers.sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      return offers;
  }
};

export const humanizeDate = (date: string) => dayjs(date).format('MMMM YYYY');
