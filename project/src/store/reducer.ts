import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {
  changeCity,
  changeCityTest,
  completeList,
  completeOffers,
  sortHide,
  sortPriceLowToHigh,
  sortShowOrHide,
  sortPriceHighToLow, sortTopRatingFirst,
} from './action';
import {offers} from '../mocks/offers';
import {CityOffers} from '../mocks/city';

const firstCityOffers = offers.filter((offer) => offer.city.name === CityOffers[0]);

const initialState = {
  city: CityOffers[0],
  cityTest: {
    title: CityOffers[0],
    lat: 48.8566,
    lng: 2.3522,
    zoom: 10,
  },
  citiesList: CityOffers,
  currentOffers: firstCityOffers,
  activeCard: false,
  instance: {},
  isActive: false,
};

const reducer = createReducer(initialState, (builder) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  builder
    .addCase(changeCityTest, (state,city: PayloadAction<string>) => {
      state.cityTest.title = city.payload;
      const findOffer = offers.find((offer) => state.cityTest.title === offer.city.name);
      // eslint-disable-next-line no-console
      if(findOffer) {
        const findLong = findOffer.city.location.longitude;
        const findLat = findOffer.city.location.latitude;
        state.cityTest.lng = findLong;
        state.cityTest.lat = findLat;
      }
    })
    .addCase(changeCity, (state,city: PayloadAction<string>) => {
      state.city = city.payload;
    })
    .addCase(completeList, (state) => {
      state.citiesList = CityOffers;
    })
    .addCase(completeOffers, (state) => {
      const result = offers.filter((offer) => offer.city.name === state.city);
      state.currentOffers = result;
    })
    .addCase(sortPriceLowToHigh, (state) => {
      const sortedArray = state.currentOffers.sort((a,b) => a.price - b.price);
      state.currentOffers = sortedArray;
    })
    .addCase(sortPriceHighToLow, (state) => {
      const sortedArray = state.currentOffers.sort((a,b) => b.price - a.price);
      state.currentOffers = sortedArray;
    })
    .addCase(sortTopRatingFirst, (state) => {
      const sortedArray = state.currentOffers.sort((a,b) => b.rating - a.rating);
      state.currentOffers = sortedArray;
    })
    .addCase(sortShowOrHide, (state) => {
      state.isActive = !state.isActive;
    })
    .addCase(sortHide, (state) => {
      state.isActive = false;
    });
});

export {reducer};
