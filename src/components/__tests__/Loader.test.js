import { screen } from '@testing-library/react';
import { renderWithRedux } from '../../helpers/testExtension';
import { store } from '../../store/store';
import { setIsLoading } from '../../store/weather/weather.actions';
import Loader from '../Loader';

describe('Loader', () => {
  it('should render when condition is true', () => {
    store.dispatch(setIsLoading(true));
    renderWithRedux(<Loader />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
