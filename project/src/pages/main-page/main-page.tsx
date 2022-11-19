import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {useState} from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import {AppRoute} from '../../components/const';
import CardList from '../../components/card-list/card-list';
import CityList from '../../components/city-list/city-list';
import Map from '../../components/map/map';
import SortForm from '../../components/sort-form/sort-form';
import {CardClassName} from '../../components/const';
import {CITIES} from '../../components/const';
import LoadingScreen from '../loading-screen/loading-screen';
import {Offer} from '../../types/offer';
import {sortByOption} from '../../utils';

function MainPage(): JSX.Element {
  //todo: Изменить сортировку с помощью UseMemo
  const activeSortType = useAppSelector((state) => state.sortType);
  const activeOffers = useAppSelector((state) => state.offers);
  const offers = sortByOption([...activeOffers], activeSortType);

  const currentCity = useAppSelector((state) => state.city);
  const currentCityOffers = offers.filter((offer) => offer.city.name === currentCity);

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );

  const onCardHover = (cardOfferId: number) => {
    const currentOffer = offers.find((offer) => offer.id === cardOfferId);

    setSelectedOffer(currentOffer);
  };

  const onCardLeave = () => {
    setSelectedOffer(undefined);
  };

  const offerLoadingStatus = useAppSelector((state) => state.isOffersDataLoading);

  if (offerLoadingStatus) {
    return (<LoadingScreen />);
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities. Главная страница</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" href='#!'>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList cities={CITIES}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${currentCityOffers.length} places to stay in ${currentCity}`}</b>
              <SortForm />
              <div className="cities__places-list places__list tabs__content">
                <CardList offers={currentCityOffers} className={CardClassName.Cities} onCardHover={onCardHover} onCardLeave={onCardLeave}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map offers={currentCityOffers} className='cities' city={currentCity} selectedOffer={selectedOffer}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
