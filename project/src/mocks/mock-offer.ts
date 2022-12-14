import {datatype, name, system} from 'faker';
import {Offer} from '../types/offer';

const mockOffer = (): Offer => ({
  bedrooms: datatype.number(),
  city: {
    location: {
      latitude: datatype.number(),
      longitude: datatype.number(),
      zoom: datatype.number(),
    },
    name: name.title(),
  },
  description: datatype.string(),
  goods: Array.from(new Array(5), () => datatype.string()),
  host: {
    avatarUrl: datatype.string(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: datatype.string(),
  },
  id: datatype.number(),
  images: Array.from(new Array(5), () => system.filePath()),
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  location: {
    latitude: datatype.number(),
    longitude: datatype.number(),
    zoom: datatype.number(),
  },
  maxAdults: datatype.number(),
  previewImage: datatype.string(),
  price: datatype.number(),
  rating: datatype.number(),
  title: datatype.string(),
  type: datatype.string(),
});

export default mockOffer;
