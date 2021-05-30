import { screen } from '@testing-library/react';
import { renderWithRedux } from '../../helpers/testExtension';
import { store } from '../../store/store';
import { setError } from '../../store/weather/weather.actions';
import Error from '../Error';

describe('Error', () => {
  it('should render error message', () => {
    store.dispatch(setError('test error message'));
    renderWithRedux(<Error />);
    expect(screen.getByTestId('error')).toHaveTextContent('test error message');
  });
});
