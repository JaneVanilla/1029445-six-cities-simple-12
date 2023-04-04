import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {
  changeCity,
  changeCityTest,
  completeList,
  completeOffers,
  sortHide,
  sortShowOrHide,
  sortPriceFilter,
  loadOffers,
  requireAuthorization,
  setOffersDataLoadingStatus,
  setCurrentOfferID,
  loadCurrentOffer,
  setUserData,
  setError,
} from './action';
import {CityOffers} from '../mocks/city';
import {AuthorizationStatus} from '../const';
import {Offer} from '../types/offers';
import {UserData} from '../types/user-data';

type initialStateType = {
  cityTest: {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
  };
  citiesList: string[];
  currentOffers: Offer[];
  activeCard: boolean;
  instance: object;
  isActive: boolean;
  offers: Offer[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  currentOfferId: number | null;
  currentRoom: object;
  error: string | null;
  userData: UserData | null;
}
const initialState: initialStateType = {
  cityTest: {
    title: 'Paris',
    lat: 48.8566,
    lng: 2.3522,
    zoom: 10,
  },
  citiesList: CityOffers,
  currentOffers: [],
  activeCard: false,
  instance: {},
  isActive: false,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  currentOfferId: null,
  currentRoom: {},
  //userData: {},
  error: null,
  userData: null,
};
// eslint-disable-next-line no-console,@typescript-eslint/no-unsafe-member-access

const reducer = createReducer(initialState, (builder) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  builder
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentRoom = action.payload;
    })
    .addCase(setCurrentOfferID, (state, action) => {
      state.currentOfferId = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadOffers,(state,action)=>{
      state.offers = action.payload;
    })
    .addCase(requireAuthorization,(state,action)=>{
      state.authorizationStatus = action.payload;
      // eslint-disable-next-line no-console
      console.log(state.authorizationStatus);
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(changeCityTest, (state,city: PayloadAction<string>) => {
      const findOffer = state.offers.find((offer) => state.cityTest.title === offer.city.name);
      if(findOffer) {
        const findLong = findOffer.city.location.longitude;
        const findLat = findOffer.city.location.latitude;
        state.cityTest.lng = findLong;
        state.cityTest.lat = findLat;
      }
    })
    .addCase(changeCity, (state,city: PayloadAction<string>) => {
      state.cityTest.title = city.payload;
    })
    .addCase(completeList, (state) => {
      //state.citiesList = cityList;
    })
    .addCase(completeOffers, (state) => {
      const result = state.offers.filter((offer) => offer.city.name === state.cityTest.title);
      state.currentOffers = result;
    })
    .addCase(sortPriceFilter, (state,option: PayloadAction<string>) => {
      if(option.payload === 'lowToHight') {
        const sortedArray = state.currentOffers.sort((a,b) => a.price - b.price);
        state.currentOffers = sortedArray;
      } else if (option.payload === 'hightToLow') {
        const sortedArray = state.currentOffers.sort((a,b) => b.price - a.price);
        state.currentOffers = sortedArray;
      } else if(option.payload === 'topRating') {
        const sortedArray = state.currentOffers.sort((a,b) => b.rating - a.rating);
        state.currentOffers = sortedArray;
      }
    })
    .addCase(sortShowOrHide, (state) => {
      state.isActive = !state.isActive;
    })
    .addCase(sortHide, (state) => {
      state.isActive = false;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
