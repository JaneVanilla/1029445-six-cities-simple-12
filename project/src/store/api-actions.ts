import {createAsyncThunk} from '@reduxjs/toolkit';
import type {State, AppDispatch} from '../types/state';
import {AxiosInstance} from 'axios';
import {Offers} from '../types/offers';
import {APIRoute} from '../const';
import {loadOffers, setOffersDataLoadingStatus} from './action';


export const fetchOffersAction = createAsyncThunk<void, undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Hotels);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);
