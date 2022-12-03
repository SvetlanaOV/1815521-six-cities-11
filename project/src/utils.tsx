import dayjs from 'dayjs';
import {Review} from './types/review';

export const humanizeDate = (date: string) => dayjs(date).format('MMMM YYYY');

export function sortReviews(reviews: Review[]) {
  return reviews.sort((reviewA, reviewB) => dayjs(reviewB.date).diff(dayjs(reviewA.date)));
}
