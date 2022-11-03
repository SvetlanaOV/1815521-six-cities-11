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
    starNumber: 5,
    title: 'perfect'
  },
  {
    starNumber: 4,
    title: 'good'
  },
  {
    starNumber: 3,
    title: 'not bad'
  },
  {
    starNumber: 2,
    title: 'badly'
  },
  {
    starNumber: 1,
    title: 'terribly'
  },
];
