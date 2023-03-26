import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<string>('site/сhangeCity');
export const completeList = createAction('site/completeList');
export const completeOffers = createAction('site/completeOffers');
export const changeCityTest = createAction<string>('site/сhangeCityTest');
//export const changeMapCenter = createAction('map/changeMapCenter');

