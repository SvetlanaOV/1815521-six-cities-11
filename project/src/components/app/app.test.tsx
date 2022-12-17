import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import {DEFAULT_CITY, DEFAULT_SORT_TYPE, AuthorizationStatus, AppRoute} from '../../components/const';
import App from './app';
import mockOffers from '../../mocks/mock-offers';

const mockStore = configureMockStore();

const offers = mockOffers();

const store = mockStore({
  User: {authorizationStatus: AuthorizationStatus.Auth},
  Data: {isOffersDataLoading: false, offers: offers},
  Action: {city: DEFAULT_CITY, sortType: DEFAULT_SORT_TYPE},
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

window.scrollTo = jest.fn();

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    const offersInDefaultCity = offers.filter((offer) => offer.city.name === DEFAULT_CITY);

    expect(screen.getByText(new RegExp(`${offersInDefaultCity.length} places to stay in ${DEFAULT_CITY}`))).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render "FavoritesPage" when user navigate to "/favorite"', () => {
    history.push(AppRoute.Favorites);

    render(fakeApp);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
