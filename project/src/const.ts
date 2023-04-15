export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
}
export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export enum PlaceTypes {
  apartment = 'Apartment',
  room = 'Private Room',
  house = 'House',
  hotel = 'Hotel',
}

export const MIN_CHARACTER_COMMENT = 50;
export const MAX_CHARACTER_COMMENT = 300;
export const RATING_STARS_COUNT = 5;
export const MAX_COUNT_COMMENTS = 10;

export const URL_MARKER_DEFAULT = '../img/pin.svg';

export const URL_MARKER_CURRENT = '../img/pin-active.svg';

export const TIMEOUT_SHOW_ERROR = 2000;

