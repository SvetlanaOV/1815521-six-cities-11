import {useState, ChangeEvent, Fragment} from 'react';
import {REVIEW_STAR_RATING} from '../../components/const';

function ReviewForm(): JSX.Element {

  const [formData, setFormData] = useState({
    review: '',
    rating: null,
  });

  const reviewFormChangeHandle = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {REVIEW_STAR_RATING.map((item) => (
          <Fragment key = {item.startNumber}>
            <input onChange={reviewFormChangeHandle} className="form__rating-input visually-hidden" value={item.startNumber} name="rating" id={`${item.startNumber}-stars`} type="radio" />
            <label htmlFor={`${item.startNumber}-stars`} className="reviews__rating-label form__rating-label" title={item.title}>
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        )
        )}
      </div>
      <textarea onChange={reviewFormChangeHandle} className="reviews__textarea form__textarea" id="review" value={formData.review} name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
