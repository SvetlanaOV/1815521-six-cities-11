import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, loadCurrentOffer, loadNearbyOffers, changeSortType, requireAuthorization, setOffersDataLoadingStatus, setError, loadReviews} from './action';
import {DEFAULT_CITY, DEFAULT_SORT_TYPE, AuthorizationStatus} from '../components/const';
import {Offer} from '../types/offer';
import {Review} from '../types/review';

type InitialState = {
  city: string;
  sortType: string;
  offers: Offer[];
  currentOffer?: Offer;
  nearbyOffers: Offer[];
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_SORT_TYPE,
  offers: [],
  nearbyOffers: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
