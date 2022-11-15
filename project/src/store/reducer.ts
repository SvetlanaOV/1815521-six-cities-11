import {createReducer} from '@reduxjs/toolkit';
import {changeCity, updateOffers, changeSortType} from './action';
import {DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../components/const';
import {offers} from '../mocks/offers';

const initialState = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_SORT_TYPE,
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export {reducer};
