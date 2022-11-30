import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import CityList from '../../components/city-list/city-list';
import MainPageContent from '../../components/main-page-content/main-page-content';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getOffersByCity} from '../../store/action-process/selectors';
import MainPageEmpty from '../../components/main-page-empty/main-page-empty';

function MainPage(): JSX.Element {
  const offers = useAppSelector(getOffersByCity);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities. Главная страница</title>
      </Helmet>
      <Header />

      <main className={`page__main page__main--index ${(offers.length === null) ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>
        {(offers.length === null) ? <MainPageEmpty /> : <MainPageContent />}
      </main>
    </div>
  );
}

export default MainPage;
