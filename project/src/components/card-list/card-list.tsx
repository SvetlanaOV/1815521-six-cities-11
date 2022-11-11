import {Fragment} from 'react';
import Card from '../card/card';
import {Offer} from '../../types/offer';
import {CardClassName} from '../../components/const';

type CardListProps = {
  offers: Offer[];
  className: CardClassName;
  onCardHover: (id: number) => void;
  onCardLeave: () => void;
}

function CardList({offers, className, onCardHover, onCardLeave}: CardListProps): JSX.Element {
  return (
    <Fragment>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          className={className}
          onCardHover={onCardHover}
          onCardLeave={onCardLeave}
        />
      ))}
    </Fragment>
  );
}

export default CardList;
