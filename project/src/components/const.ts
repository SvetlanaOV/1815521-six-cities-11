export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CardClassName {
  Cities = 'cities',
  Favorites = 'favorites',
  Near = 'near-places',
}

export const CITIES = ['Tokio', 'Paris', 'Berlin', 'Amsterdam'];

export const REVIEW_STAR_RATING = [
  {
    startNumber: 5,
    title: 'perfect'
  },
  {
    startNumber: 4,
    title: 'good'
  },
  {
    startNumber: 3,
    title: 'not bad'
  },
  {
    startNumber: 2,
    title: 'badly'
  },
  {
    startNumber: 1,
    title: 'terribly'
  },
];
