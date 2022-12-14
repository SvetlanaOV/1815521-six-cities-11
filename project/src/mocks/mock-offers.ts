import mockOffer from './mock-offer';
import {Offer} from '../types/offer';

const mockOffers = (): Offer[] => new Array(5).fill(null).map(() => mockOffer());

export default mockOffers;
