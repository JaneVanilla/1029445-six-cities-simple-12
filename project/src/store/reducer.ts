import {createReducer} from '@reduxjs/toolkit';
import {changeCity, completeList} from './action';
import {CITY} from '../mocks/city';

const initialState = {
  city: CITY.title,
  locations: ['Paris','Cologne','Brussels','Amstergam','Hamburg','Dusseldorf'],
  mistakes: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state) => {
      state.city = 'Paris';
    })
    .addCase(completeList, (state) => {
      state.locations = ['Paris','Cologne','Brussels','Amstergam','Hamburg','Dusseldorf'];
    });
});

export {reducer};
