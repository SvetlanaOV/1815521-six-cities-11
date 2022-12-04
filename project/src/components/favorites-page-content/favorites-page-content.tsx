import FavoritesCardList from '../../components/favorites-card-list/favorites-card-list';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getOffers} from '../../store/data-process/selectors';
import {CardClassName} from '../../components/const';

function FavoritesPageContent (): JSX.Element {
  const offers = useAppSelector(getOffers);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoritesCardList offers={offers} className={CardClassName.Favorites} />
    </section>
  );
}

export default FavoritesPageContent;
