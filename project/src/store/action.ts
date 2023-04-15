import {createAction} from '@reduxjs/toolkit';
import {Offers,Offer} from '../types/offers';
import {AuthorizationStatus} from '../const';
import {UserData} from '../types/user-data';
import Review from '../types/review';

export const changeCity = createAction<string>('site/сhangeCity');
export const completeList = createAction('site/completeList');
export const completeOffers = createAction('site/completeOffers');
export const changeCityTest = createAction<string>('site/сhangeCityTest');
export const sortPriceFilter = createAction<string>('site/sortPriceLowToHigh');
export const sortShowOrHide = createAction('site/showHideSortBlock');
export const sortHide = createAction('site/hideSortBlock');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setCurrentOfferID = createAction<number>('data/setCurrentOfferID');

export const loadCurrentOffer = createAction<Offer>('data/loadCurrentOffer');

export const setUserData = createAction<UserData>('data/setUserData');

export const setError = createAction<string | null>('data/setError');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

//export const setEmailField = createAction<string>('data/setEmailField');


export const loadOfferById = createAction<Offer>('data/loadOfferById');

export const loadNearOffers = createAction<Offer[]>('data/loadNearOffers');

export const loadReviews = createAction<Review[]>('reviews/loadReviews');

export const setNextReview = createAction<Review>('reviews/setNextReview');
