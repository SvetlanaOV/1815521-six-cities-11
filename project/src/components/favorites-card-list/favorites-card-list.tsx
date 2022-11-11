import Card from '../../components/card/card';
import {CardClassName} from '../../components/const';
import {Offer} from '../../types/offer';
import {CITIES} from '../const';

type FavoritesCardListProps = {
  offers: Offer[];
  className: CardClassName;
  onCardHover: (id: number) => void;
  onCardLeave: () => void;
}

function FavoritesCardList({offers, className, onCardHover, onCardLeave}:FavoritesCardListProps) {
  return(
    <ul className="favorites__list">
      {CITIES.map((city) => {
        const currentCityOffers = offers.filter((offer) => offer.city.name === city && offer.isFavorite);
        if(currentCityOffers.length > 0){
          return(
            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#!">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {currentCityOffers.map((offer)=> (
                  <Card
                    key={offer.id}
                    offer={offer}
                    className={className}
                    onCardHover={onCardHover}
                    onCardLeave={onCardLeave}
                  />
                ))}
              </div>
            </li>
          );}
        return null;
      }
      )}
    </ul>
  );
}

export default FavoritesCardList;
