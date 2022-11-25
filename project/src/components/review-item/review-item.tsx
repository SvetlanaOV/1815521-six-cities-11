import {humanizeDate} from '../../utils';
import {Review} from '../../types/review';
import {REVIEW_STAR_WIDTH} from '../const';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem({review}: ReviewItemProps): JSX.Element {
  const {comment, date, user, rating} = review;

  const reviewDate = humanizeDate(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(rating) * REVIEW_STAR_WIDTH}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{reviewDate}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
