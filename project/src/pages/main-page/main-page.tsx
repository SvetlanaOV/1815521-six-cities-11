import {Helmet} from 'react-helmet-async';
import {useState, useMemo} from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import Header from '../../components/header/header';
import CardList from '../../components/card-list/card-list';
import CityList from '../../components/city-list/city-list';
import Map from '../../components/map/map';
import SortForm from '../../components/sort-form/sort-form';
import {CardClassName} from '../../components/const';
import LoadingScreen from '../loading-screen/loading-screen';
import {Offer} from '../../types/offer';
import {sortByOption} from '../../utils';
import {getCity, getSortType} from '../../store/action-process/selectors';
import {getOffers, getOffersLoadedData} from '../../store/data-process/selectors';

function MainPage(): JSX.Element {
  //todo: Изменить сортировку с помощью UseMemo
  const activeSortType = useAppSelector(getSortType);
  const activeOffers = useAppSelector(getOffers);

  const offers = useMemo(() => sortByOption([...activeOffers], activeSortType), [activeOffers, activeSortType]);

  const currentCity = useAppSelector(getCity);
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

  const offerLoadingStatus = useAppSelector(getOffersLoadedData);

  if (offerLoadingStatus) {
    return (<LoadingScreen />);
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities. Главная страница</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
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
