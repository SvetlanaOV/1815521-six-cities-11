import FavoritesCard from '../favorites-card/favorites-card';
import {Offer} from '../../types/offer';
import {CITIES} from '../const';

type FavoritesCardListProps = {
    offers: Offer[];
  }

function FavoritesCardList({offers}:FavoritesCardListProps) {
  return(
    <ul className="favorites__list">
      {CITIES.map((city)=> {
        const currentCityOffers = offers.filter((offer)=> offer.city.name === city && offer.isFavorite);
        if(currentCityOffers.length > 0){
          return(
            <li key = {city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#!">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {currentCityOffers.map((offer)=> (
                  <FavoritesCard
                    key={offer.id}
                    offer={offer}
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
