import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {AuthorizationStatus, AppRoute} from '../components/const';

export const changeCity = createAction('offers/changeCity', (city: string) => ({
  payload: city,
}));
export const loadOffers = createAction('data/loadOffers', (offers: Offer[]) => ({
  payload: offers,
}));
export const loadCurrentOffer = createAction('data/loadCurrentOffer', (offer: Offer) => ({
  payload: offer,
}));
export const loadNearbyOffers = createAction('data/loadNearbyOffers', (offers: Offer[]) => ({
  payload: offers,
}));
export const loadReviewList = createAction('data/loadReviewList', (reviews: Review[]) => ({
  payload: reviews,
}));
export const sendNewReview = createAction('data/sendNewReview', (reviews: Review[]) => ({
  payload: reviews,
}));
export const changeSortType = createAction('offers/changeSortType', (sortType: string) => ({
  payload: sortType,
}));
export const requireAuthorization = createAction('user/requireAuthorization', (authStatus: AuthorizationStatus) => ({
  payload: authStatus,
}));
export const setOffersDataLoadingStatus = createAction('data/setOffersDataLoadingStatus', (offersDataLoadingStatus: boolean) => ({
  payload: offersDataLoadingStatus,
}));

export const redirectToRoute = createAction<AppRoute>('offers/redirectToRoute');
