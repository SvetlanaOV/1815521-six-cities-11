import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HistoryRouter from '../history-route/history-route';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {createMemoryHistory } from 'history';
import Card from './card';
import mockOffer from '../../mocks/mock-offer';
import {CardClassName} from '../const';

describe('Component: PlaceCard', () => {
  const history = createMemoryHistory();
  const offer = mockOffer();
  offer.isPremium = true;

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Card offer={offer} className={CardClassName.Cities}/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(/Premium/i)).toBeInTheDocument();
  });
});
