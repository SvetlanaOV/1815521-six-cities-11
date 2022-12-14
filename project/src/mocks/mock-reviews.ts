import mockReview from './mock-review';
import {Review} from '../types/review';

const mockReviews = (): Review[] => new Array(5).fill(null).map(() => mockReview());

export default mockReviews;
