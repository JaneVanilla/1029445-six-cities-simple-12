import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {changeCity, completeList, completeOffers} from './action';
import {offers} from '../mocks/offers';
import {CityOffers} from '../mocks/city';

const initialState = {
  city: CityOffers[0],
  citiesList: CityOffers,
  currentOffers: offers,
  activeCard: false,
};

const reducer = createReducer(initialState, (builder) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  builder
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
