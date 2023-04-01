import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offers';
import {AuthorizationStatus} from '../const';

export const changeCity = createAction<string>('site/сhangeCity');
export const completeList = createAction('site/completeList');
export const completeOffers = createAction('site/completeOffers');
export const changeCityTest = createAction<string>('site/сhangeCityTest');
export const sortPriceFilter = createAction<string>('site/sortPriceLowToHigh');
export const sortShowOrHide = createAction('site/showHideSortBlock');
export const sortHide = createAction('site/hideSortBlock');

export const loadOffers = createAction<Offers>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');


