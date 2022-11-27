import {useState, ChangeEvent, FormEvent, Fragment} from 'react';
import {REVIEW_STAR_RATING, MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH} from '../../components/const';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {ReviewData} from '../../types/review';
import {sendNewReviewAction} from '../../store/api-actions';

function ReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    comment: '',
    rating: '',
  });

  const reviewFormChangeHandle = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmit = (reviewData: ReviewData) => {
    dispatch(sendNewReviewAction(reviewData));
  };

  const currentOffer = useAppSelector((state) => state.currentOffer);

  const isFormValid = formData.rating !== null && formData.comment.length > MIN_REVIEW_LENGTH && formData.comment.length < MAX_REVIEW_LENGTH;

  const isFormDisabled = !isFormValid;

  const reviewFormSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(currentOffer && isFormValid) {
      onSubmit({
        id: currentOffer.id,
        comment: formData.comment,
        rating: formData.rating,
      });
    }
    setFormData({...formData, comment: '', rating: ''});
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={reviewFormSubmitHandle}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {REVIEW_STAR_RATING.map((item) => (
          <Fragment key = {item.starNumber}>
            <input onChange={reviewFormChangeHandle} className="form__rating-input visually-hidden" value={item.starNumber} name="rating" id={`${item.starNumber}-stars`} type="radio" checked={(item.starNumber === Number(formData.rating))} />
            <label htmlFor={`${item.starNumber}-stars`} className="reviews__rating-label form__rating-label" title={item.title}>
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        )
        )}
      </div>
      <textarea onChange={reviewFormChangeHandle} className="reviews__textarea form__textarea" id="comment" value={formData.comment} name="comment" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isFormDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
