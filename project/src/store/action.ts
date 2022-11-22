import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {AuthorizationStatus, AppRoute} from '../components/const';

export const changeCity = createAction('offers/changeCity', (city: string) => ({
  payload: city,
}));
export const loadOffers = createAction('offers/loadOffers', (offers: Offer[]) => ({
  payload: offers,
}));
export const loadCurrentOffer = createAction('offers/loadPropertyOffer', (offer: Offer) => ({
  payload: offer,
}));
export const loadNearbyOffers = createAction('offers/loadNearbyOffers', (offers: Offer[]) => ({
  payload: offers,
}));
export const loadReviews = createAction('offers/loadReviews', (reviews: Review[]) => ({
  payload: reviews,
}));
export const changeSortType = createAction('offers/changeSortType', (sortType: string) => ({
  payload: sortType,
}));
export const requireAuthorization = createAction('user/requireAuthorization', (authStatus: AuthorizationStatus) => ({
  payload: authStatus,
}));
export const setOffersDataLoadingStatus = createAction('offers/setOffersDataLoadingStatus', (offersDataLoadingStatus: boolean) => ({
  payload: offersDataLoadingStatus,
}));

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
