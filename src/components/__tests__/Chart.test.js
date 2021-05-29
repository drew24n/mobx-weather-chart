import { screen } from '@testing-library/react';
import { renderWithRedux } from '../../helpers/testExtension';
import Chart from '../Chart';
import { store } from '../../store/store';
import { setError } from '../../store/weather/weather.actions';

describe('Chart', () => {
  it('should render without crash', () => {
    renderWithRedux(<Chart />);
    expect(screen.getByTestId('chart')).toBeInTheDocument();
  });

  it('should render error message', () => {
    store.dispatch(setError('test error message'));
    renderWithRedux(<Chart />);
    expect(screen.getByTestId('chart')).toHaveTextContent('test error message');
    store.dispatch(setError(''));
  });

  it('should have no children when there is no data', () => {
    renderWithRedux(<Chart />);
    expect(screen.getByTestId('chart').children.length).toBe(0);
  });
});
