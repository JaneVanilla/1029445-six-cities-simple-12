import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {
  changeCity,
  changeCityTest,
  completeList,
  completeOffers,
  sortHide,
  sortShowOrHide,
  sortPriceFilter,
  loadOffers, requireAuthorization, setOffersDataLoadingStatus,
} from './action';
import {CityOffers} from '../mocks/city';
import {AuthorizationStatus} from '../const';
import {Offer} from '../types/offers';


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
  authorizationStatus: string;
  isQuestionsDataLoading: boolean;
}
const initialState: initialStateType = {
  cityTest: {
    title: CityOffers[0],
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
  isQuestionsDataLoading: false,

};

const reducer = createReducer(initialState, (builder) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  builder
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isQuestionsDataLoading = action.payload;
    })
    .addCase(loadOffers,(state,action)=>{
      state.offers = action.payload;
      // eslint-disable-next-line no-console
      console.log('offers',state.offers);
    })
    .addCase(requireAuthorization,(state,action)=>{
      state.authorizationStatus = action.payload;
    })
    .addCase(changeCityTest, (state,city: PayloadAction<string>) => {
      const findOffer = state.offers.find((offer) => state.cityTest.title === offer.city.name);
      // eslint-disable-next-line no-console
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
      state.citiesList = CityOffers;
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
    });
});

export {reducer};
