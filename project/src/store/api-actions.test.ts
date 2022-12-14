import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import {checkAuthAction, fetchFavoriteOffersAction, loginAction, logoutAction, fetchOffersAction, fetchCurrentOfferAction, fetchNearbyOffersAction, fetchReviewListAction} from './api-actions';
import {APIRoute} from '../components/const';
import {State} from '../types/state';
import {AuthData} from '../types/auth-data';
import {redirectToRoute} from './action';
import mockOffers from '../mocks/mock-offers';
import mockOffer from '../mocks/mock-offer';
import mockReviews from '../mocks/mock-reviews';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      fetchFavoriteOffersAction.pending.type,
      checkAuthAction.fulfilled.type,
    ]);
  });

  it('should dispatch RequriedAuthorization when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToRoute.type,
      fetchFavoriteOffersAction.pending.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      fetchOffersAction.pending.type,
      logoutAction.fulfilled.type,
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });

  it('should dispatch fetchOffersAction when GET /hotels', async () => {
    const offers = mockOffers();

    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, offers);

    const store = mockStore();

    await store.dispatch(fetchOffersAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchCurrentOfferAction when GET /hotels/{hotelId}', async () => {
    const currentOffer = mockOffer();
    const id = currentOffer.id;

    mockAPI
      .onGet(`${APIRoute.Offers}/${id}`)
      .reply(200, currentOffer);

    const store = mockStore();

    await store.dispatch(fetchCurrentOfferAction(id.toString()));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCurrentOfferAction.pending.type,
      fetchCurrentOfferAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchNearbyOffersAction when GET /hotels/{hotelId}/nearby', async () => {
    const currentOffer = mockOffer();
    const id = currentOffer.id;
    const nearbyOffers = mockOffers();

    mockAPI
      .onGet(`${APIRoute.Offers}/${id}/nearby`)
      .reply(200, nearbyOffers);

    const store = mockStore();

    await store.dispatch(fetchNearbyOffersAction(id.toString()));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchNearbyOffersAction.pending.type,
      fetchNearbyOffersAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchFavoriteOffersAction when GET /favorite', async () => {
    const offers = mockOffers();

    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, offers);

    const store = mockStore();

    await store.dispatch(fetchFavoriteOffersAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFavoriteOffersAction.pending.type,
      fetchFavoriteOffersAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchReviewListAction when GET /comments/{hotelId}', async () => {
    const offer = mockOffer();
    const id = offer.id;
    const reviews = mockReviews();

    mockAPI
      .onGet(`${APIRoute.Reviews}/${id}`)
      .reply(200, reviews);

    const store = mockStore();

    await store.dispatch(fetchReviewListAction(id.toString()));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewListAction.pending.type,
      fetchReviewListAction.fulfilled.type
    ]);
  });

});
