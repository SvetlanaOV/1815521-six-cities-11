import {Fragment} from 'react';
import Card from '../card/card';
import {Offer} from '../../types/offer';
import {CardClassName} from '../../components/const';

type CardListProps = {
  offers: Offer[];
  className: CardClassName;
}

function CardList({offers, className}: CardListProps): JSX.Element {
  return (
    <Fragment>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          className={className}
        />
      ))}
    </Fragment>
  );
}

export default CardList;
