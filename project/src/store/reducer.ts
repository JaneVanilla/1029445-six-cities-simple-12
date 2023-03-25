import {createReducer} from '@reduxjs/toolkit';
import {changeCity, completeList} from './action';

const initialState = {
  city: 'Paris',
  locations: ['Paris','Cologne','Brussels','Amstergam','Hamburg','Dusseldorf'],
  mistakes: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state) => {
      state.city = 'Cologne';
    })
    .addCase(completeList, (state) => {
      state.locations = ['Paris','Cologne','Brussels','Amstergam','Hamburg','Dusseldorf'];
    });
});

export {reducer};
