import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {offersNearby} from './mocks/offers-nearby';
import {reviews} from './mocks/reviews';
import {CITY, CityOffers} from './mocks/city';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  placesCount: 320,
} as const;

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App arrayOfCities={CityOffers} city={CITY} offers={offers} offersOpcion={offersNearby} reviews={reviews} placesCount={Setting.placesCount}/>
    </Provider>
  </React.StrictMode>,
);
