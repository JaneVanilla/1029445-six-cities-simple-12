import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {offersNearby} from './mocks/offers-nearby';
import {reviews} from './mocks/reviews';
import {CITY} from './mocks/city';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  placesCount: 320,
} as const;

root.render(
  <React.StrictMode>
    <App city={CITY} offers={offers} offersOpcion={offersNearby} reviews={reviews} placesCount={Setting.placesCount}/>
  </React.StrictMode>,
);
