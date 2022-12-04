import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {AppRoute} from '../../components/const';
import Header from '../../components/header/header';
import {getFavoriteOffers} from '../../store/data-process/selectors';
import {useAppSelector} from '../../hooks/useAppSelector';
import FavoritesEmptyPage from '../../components/favorites-page-empty/favorites-page-empty';
import FavoritesPageContent from '../../components/favorites-page-content/favorites-page-content';

function FavoritesPage(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities. Избранное</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {(favoriteOffers?.length === 0) ? <FavoritesEmptyPage /> : <FavoritesPageContent />}
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
