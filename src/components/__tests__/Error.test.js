import { screen, render } from '@testing-library/react';
import Error from '../Error';
import weather from '../../store/weather';

describe('Error', () => {
  it('should render error message', () => {
    weather.setError('test error message');
    render(<Error />);
    expect(screen.getByTestId('error')).toHaveTextContent('test error message');
  });
});
