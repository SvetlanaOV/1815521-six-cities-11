import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../components/const';
import {DataProcess} from '../../types/state';
import {fetchOffersAction, fetchCurrentOfferAction, fetchNearbyOffersAction, fetchReviewListAction, sendNewReviewAction} from '../api-actions';
import { Offer } from '../../types/offer';

const initialState: DataProcess = {
  offers: [],
  nearbyOffers: [],
  reviews: [],
  isOffersDataLoading: false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    selectOffer: (state, action: PayloadAction<Offer | undefined>) => {
      state.selectedOffer = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchReviewListAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchReviewListAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(sendNewReviewAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(sendNewReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isOffersDataLoading = false;
      });
  }
});

export const {selectOffer} = dataProcess.actions;
