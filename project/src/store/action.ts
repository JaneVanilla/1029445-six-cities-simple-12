import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<string>('site/сhangeCity');
export const completeList = createAction('site/completeList');
export const completeOffers = createAction('site/completeOffers');

