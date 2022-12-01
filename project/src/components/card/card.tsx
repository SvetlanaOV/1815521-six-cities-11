import {Link} from 'react-router-dom';
import cn from 'classnames';
import {Offer} from '../../types/offer';
import {CardClassName, REVIEW_STAR_WIDTH} from '../../components/const';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {selectOffer} from '../../store/data-process/data-process';

type CardProps = {
  offer: Offer;
  className: CardClassName;
}

function Card({offer, className}: CardProps) {
  const {id, previewImage, isPremium, isFavorite, price, rating, title, type} = offer;

  const dispatch = useAppDispatch();

  return(
    <article key={id} className={`${className}__card place-card`}
      onMouseOver={() => dispatch(selectOffer(offer))}
      onMouseLeave={() => dispatch(selectOffer(undefined))}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={cn('place-card__bookmark-button', {'place-card__bookmark-button--active' : isFavorite}, 'button')} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * REVIEW_STAR_WIDTH}%`}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
