import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {AppRoute} from '../../components/const';
import {CardClassName} from '../../components/const';
import Header from '../../components/header/header';
import FavoritesCardList from '../../components/favorites-card-list/favorites-card-list';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getOffers} from '../../store/data-process/selectors';

function FavoritesPage(): JSX.Element {
  const offers = useAppSelector(getOffers);

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities. Избранное</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesCardList offers={offers} className={CardClassName.Favorites} onCardHover={() => null} onCardLeave={() => null}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}
export default FavoritesPage;
