import {datatype, date, name, system} from 'faker';
import {Review} from '../types/review';

const mockReview = (): Review => ({
  comment: datatype.string(),
  date: date.past().toISOString(),
  id: datatype.number(),
  rating: datatype.number(),
  user: {
    avatarUrl:system.filePath(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: name.firstName(),
  },
});

export default mockReview;
