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
  selectedOffer?: Offer;
};

export type ActionProcess = {
  city: string;
  sortType: string;
  handlerStatus: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
