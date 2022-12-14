import {dataProcess} from './data-process';
import {DataProcess} from '../../types/state';
import {fetchOffersAction, fetchNearbyOffersAction, fetchFavoriteOffersAction, fetchReviewListAction} from '../api-actions';
import mockOffers from '../../mocks/mock-offers';
import mockReviews from '../../mocks/mock-reviews';

const offers = mockOffers();
const reviews = mockReviews();

describe('Reducer: offers', () => {
  let state: DataProcess;

  beforeEach(() => {
    state = {
      offers: [],
      nearbyOffers: [],
      reviews: [],
      isOffersDataLoading: false,
      favoriteOffers: [],
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(dataProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchOffersAction test', () => {
    it('should add offers to state and downloading status is false', () => {
      expect(dataProcess.reducer(state, {type: fetchOffersAction.fulfilled.type, payload: offers}))
        .toEqual({...state, offers, isOffersDataLoading: false});
    });
  });

  describe('fetchNearbyOffersAction test', () => {
    it('should add nearby offers to state', () => {
      expect(dataProcess.reducer(state, {type: fetchNearbyOffersAction.fulfilled.type, payload: offers}))
        .toEqual({...state, nearbyOffers: offers});
    });
  });

  describe('fetchReviewListAction test', () => {
    it('should add review list offers to state', () => {
      expect(dataProcess.reducer(state, {type: fetchReviewListAction.fulfilled.type, payload: reviews}))
        .toEqual({...state, reviews: reviews});
    });
  });


  describe('fetchFavoriteOffersAction test', () => {
    it('should add favorites offers to state', () => {
      expect(dataProcess.reducer(state, {type: fetchFavoriteOffersAction.fulfilled.type, payload: offers}))
        .toEqual({...state, favoriteOffers: offers});
    });
  });
});
