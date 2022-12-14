import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HistoryRouter from '../history-route/history-route';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {createMemoryHistory} from 'history';
import ReviewItem from './review-item';
import mockReview from '../../mocks/mock-review';

describe('Component: PlaceCard', () => {
  const history = createMemoryHistory();
  const review = mockReview();

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewItem review={review}/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(new RegExp(review.comment, 'i'))).toBeInTheDocument();
  });
});
