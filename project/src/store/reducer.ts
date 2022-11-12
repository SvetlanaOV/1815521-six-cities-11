import {createReducer} from '@reduxjs/toolkit';
import {changeCity, updateOffers} from './action';
import {DEFAULT_CITY} from '../components/const';
import {offers} from '../mocks/offers';

const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
