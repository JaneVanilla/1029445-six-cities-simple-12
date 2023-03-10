import {Offers} from '../types/offers';

export const offers: Offers = [
  {
    id: '1',
    mark: 'Premium',
    image: '../img/apartment-01.jpg',
    price: 120,
    rating: '80%',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    roomConfiguration: {
      bedrooms: 3,
      maxAdults: 6,
      roomFilling: ['WI-FI,Heating,Kitchen,Fridge'],
      ratingValue: 4.8,
      reviews: {
        avatar: '../img/avatar-max.jpg',
        userName: 'Max',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        time: 'April 2019',
      }
    }
  },
  {
    id: '2',
    image: '../img/room.jpg',
    price: 80,
    rating: '80%',
    title: 'Wood and stone place',
    type: 'Private room',
    roomConfiguration: {
      bedrooms: 3,
      maxAdults: 6,
      roomFilling: ['WI-FI,Heating,Kitchen,Fridge'],
      ratingValue: 4.8,
      reviews: {
        avatar: '../img/avatar-max.jpg',
        userName: 'Max',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        time: 'April 2019',
      }
    }
  },
  {
    id: '3',
    image: '../img/apartment-02.jpg',
    price: 132,
    rating: '80%',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    roomConfiguration: {
      bedrooms: 3,
      maxAdults: 6,
      roomFilling: ['WI-FI,Heating,Kitchen,Fridge'],
      ratingValue: 4.8,
      reviews: {
        avatar: '../img/avatar-max.jpg',
        userName: 'Max',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        time: 'April 2019',
      }
    }
  },
  {
    id: '4',
    mark: 'Premium',
    image: '../img/apartment-03.jpg',
    price: 180,
    rating: '100%',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    roomConfiguration: {
      bedrooms: 3,
      maxAdults: 6,
      roomFilling: ['WI-FI,Heating,Kitchen,Fridge'],
      ratingValue: 4.8,
      reviews: {
        avatar: '../img/avatar-max.jpg',
        userName: 'Max',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        time: 'April 2019',
      }
    }
  },
];

