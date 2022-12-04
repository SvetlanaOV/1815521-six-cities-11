import {useAppSelector} from '../../hooks/useAppSelector';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import SortForm from '../../components/sort-form/sort-form';
import {CardClassName} from '../../components/const';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {Offer} from '../../types/offer';
import {getCity, getOffersByCity, getSortedOffers} from '../../store/action-process/selectors';
import {getOffersLoadedData} from '../../store/data-process/selectors';

function MainPageContent(): JSX.Element {
  const offers = useAppSelector(getOffersByCity);
  const currentCity = useAppSelector(getCity);

  const sortedOffers = useAppSelector(getSortedOffers);

  const offerLoadingStatus = useAppSelector(getOffersLoadedData);

  if (offerLoadingStatus) {
    return (<LoadingScreen />);
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${offers.length} places to stay in ${currentCity}`}</b>
          <SortForm />
          <div className="cities__places-list places__list tabs__content">
            <CardList offers={sortedOffers as Offer[]} className={CardClassName.Cities} />
          </div>
        </section>
        <div className="cities__right-section">
          <Map offers={offers} className='cities' city={currentCity} />
        </div>
      </div>
    </div>
  );
}

export default MainPageContent;
