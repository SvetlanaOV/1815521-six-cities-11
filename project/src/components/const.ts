export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  Root = '/',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
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

export const DEFAULT_CITY = 'Paris';

export const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.933594,
      longitude: 6.961899,
      zoom: 10
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 10
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10
    }
  }
];


export const DEFAULT_SORT_TYPE = 'Popular';

export enum SortType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

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

export enum UrlMapMarker {
  Default = '../../img/pin.svg',
  Active = '../../img/pin-active.svg',
}

export enum MapMarker {
  Width = 40,
  Height = 40,
}

export enum MapMarkerAnchor {
  Width = 20,
  Height = 40,
}

export const TIMEOUT_SHOW_ERROR = 2000;
