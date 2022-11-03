import {useState, Fragment} from 'react';
import Card from '../card/card';
import {Offer} from '../../types/offer';
import {CardClassName} from '../../components/const';

type CardListProps = {
  offers: Offer[];
  className: CardClassName;
}

function CardList ({offers, className}: CardListProps): JSX.Element {
  const [, setIsActiveCard] = useState(0);
  return (
    <Fragment>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          className={className}
          onMouseOver={() => setIsActiveCard(offer.id)}
        />
      ))}
    </Fragment>
  );
}

export default CardList;
