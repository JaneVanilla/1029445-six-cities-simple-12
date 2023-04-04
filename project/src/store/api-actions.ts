import {createAsyncThunk} from '@reduxjs/toolkit';
import type {State, AppDispatch} from '../types/state';
import {AxiosInstance} from 'axios';
import {Offers, Offer} from '../types/offers';
import {APIRoute,AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {
  completeOffers,
  loadOffers,
  setOffersDataLoadingStatus,
  loadCurrentOffer,
  requireAuthorization,
  setUserData,
  setError, completeList,
} from './action';
import {saveToken, dropToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {store} from './';

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('data/fetchOffers',
  async (_arg, {dispatch,extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Hotels);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
    dispatch(completeOffers());
    dispatch(completeList());
  }
);

export const fetchOfferCurrentAction = createAsyncThunk<void, string,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('data/fetchOfferCurrent',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(`https://12.react.pages.academy/six-cities-simple/hotels/${_arg}`);
    dispatch(loadCurrentOffer(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: userData} = await api.get<UserData>(APIRoute.Login);
      dispatch(setUserData(userData));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: userData} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(userData.token);
    dispatch(setUserData(userData));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
