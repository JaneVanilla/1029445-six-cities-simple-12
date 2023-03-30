import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<string>('site/сhangeCity');
export const completeList = createAction('site/completeList');
export const completeOffers = createAction('site/completeOffers');
export const changeCityTest = createAction<string>('site/сhangeCityTest');
export const sortPriceLowToHigh = createAction('site/sortPriceLowToHigh');
export const sortPriceHighToLow = createAction('site/sortPriceHighToLow');
export const sortTopRatingFirst = createAction('site/sortTopRatingFirst');
export const sortShowOrHide = createAction('site/showHideSortBlock');
export const sortHide = createAction('site/hideSortBlock');


