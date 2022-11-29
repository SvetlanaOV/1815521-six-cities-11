import {store} from '../store/index';
import {AuthorizationStatus} from '../components/const';
import {Offer} from '../types/offer';
import {Review} from '../types/review';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type DataProcess = {
  offers: Offer[];
  currentOffer?: Offer;
  nearbyOffers: Offer[];
  reviews: Review[];
  isOffersDataLoading: boolean;
};

export type ActionProcess = {
  city: string;
  sortType: string;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
