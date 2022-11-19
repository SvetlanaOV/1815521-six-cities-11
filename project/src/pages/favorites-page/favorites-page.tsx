import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {useState} from 'react';
import {AppRoute} from '../../components/const';
import {Offer} from '../../types/offer';
import {CardClassName} from '../../components/const';
import Logo from '../../components/logo/logo';
import FavoritesCardList from '../../components/favorites-card-list/favorites-card-list';

function FavoritesPage(): JSX.Element {
  const [offers] = useState<Offer[]>([]);

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities. Избранное</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#!">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
