import {render, screen} from '@testing-library/react';
import FavoritesPageEmpty from './favorites-page-empty';
import '@testing-library/jest-dom/extend-expect';

describe('Component: FavoritesEmpty', () => {
  it('should render correctly', () => {
    render(<FavoritesPageEmpty />);

    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips./i)).toBeInTheDocument();
  });
});
