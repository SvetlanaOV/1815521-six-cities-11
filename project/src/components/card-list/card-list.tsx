import {useState} from 'react';
import Card from '../card/card';
import {Offer} from '../../types/offer';

type CardListProps = {
  offers: Offer[];
}

function CardList ({offers}: CardListProps): JSX.Element {
  const [, setIsActiveCard] = useState(0);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseOver={() => setIsActiveCard(offer.id)}
        />
      ))}
    </div>
  );
}

export default CardList;
