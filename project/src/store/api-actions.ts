import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {redirectToRoute} from './action';
import {Offer} from '../types/offer';
import {Review, ReviewData} from '../types/review';
import {APIRoute, AppRoute} from '../components/const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {FavoriteOffer} from '../types/favorite-offer';
import {saveToken, dropToken} from '../services/token';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchCurrentOfferAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    return data;
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  },
);

export const changeFavoriteStatusAction = createAsyncThunk<Offer, FavoriteOffer, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/setFavoriteStatus',
  async ({id, status}, {dispatch, extra: api}) => {
    const {data} = await api.post<Offer>(`${APIRoute.Favorite}/${id}/${status}`);
    dispatch(fetchOffersAction());
    dispatch(fetchFavoriteOffersAction());
    return data;
  },
);

export const fetchReviewListAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewList',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
    return data;
  },
);

export const sendNewReviewAction = createAsyncThunk<Review[], ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async ({id, rating, comment}, {dispatch, extra: api}) => {
    const {data} = await api.post<Review[]>(`${APIRoute.Reviews}/${id}`, {rating, comment});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthAction',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    dispatch(fetchFavoriteOffersAction());
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    dispatch(fetchFavoriteOffersAction());
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(fetchOffersAction());
  },
);
