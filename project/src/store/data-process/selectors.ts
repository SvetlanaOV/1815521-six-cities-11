import {NameSpace} from '../../components/const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getCurrentOffer = (state: State): Offer | undefined => state[NameSpace.Data].currentOffer;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getOffersLoadedData = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getSelectedOffer = (state: State): Offer | undefined => state[NameSpace.Data].selectedOffer;
