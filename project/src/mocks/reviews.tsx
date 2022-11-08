import {Review} from '../types/review';

export const reviews: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Oct 29 2022 09:20:33 GMT+0200 (Центральная Африка)',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Oliver.conner'
    }
  },
  {
    comment: 'A quiet cozy and picturesque.',
    date: 'Sat Nov 29 2022 07:20:33 GMT+0200 (Центральная Африка)',
    id: 2,
    rating: 2,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: true,
      name: 'Angelina'
    }
  },
  {
    comment: 'A quiet cozy and picturesque.',
    date: 'Sat Dec 20 2022 09:20:33 GMT+0200 (Центральная Африка)',
    id: 3,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: false,
      name: 'Max'
    }
  },
];
