
import {Fragment} from 'react';
import {Review} from '../../types/review';
import ReviewItem from '../review-item/review-item';

type ReviewItemProps = {
  reviews: Review[];
}

function ReviewList({reviews}: ReviewItemProps): JSX.Element {
  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem
            key={review.id}
            review={review}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default ReviewList;
