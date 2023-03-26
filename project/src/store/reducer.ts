import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {changeCity, changeCityTest, completeList, completeOffers} from './action';
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
    });
});

export {reducer};
