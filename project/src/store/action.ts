import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

export const changeCity = createAction('offers/changeCity', (city: string) => ({
  payload: city,
}));
export const updateOffers = createAction('offers/updateOffers', (offers: Offer[]) => ({
  payload: offers,
}));
export const changeSortType = createAction('offers/changeSortType', (sortType: string) => ({
  payload: sortType,
}));
