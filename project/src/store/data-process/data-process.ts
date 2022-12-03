import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../components/const';
import {DataProcess} from '../../types/state';
import {fetchOffersAction, fetchCurrentOfferAction, fetchNearbyOffersAction, fetchReviewListAction, sendNewReviewAction, fetchFavoriteOffersAction, changeFavoriteStatusAction} from '../api-actions';
import {Offer} from '../../types/offer';

const initialState: DataProcess = {
  offers: [],
  nearbyOffers: [],
  reviews: [],
  isOffersDataLoading: false,
  favoriteOffers: [],
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
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
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
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        state.offers.forEach((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = !offer.isFavorite;
          }
        });

        if (state.currentOffer) {
          state.currentOffer.isFavorite = !state.currentOffer.isFavorite;
        }

        if (state.nearbyOffers) {
          state.nearbyOffers.forEach((offer) => {
            if (offer.id === action.payload.id) {
              offer.isFavorite = !offer.isFavorite;
            }
          });
        }
      });
  }
});

export const {selectOffer} = dataProcess.actions;
