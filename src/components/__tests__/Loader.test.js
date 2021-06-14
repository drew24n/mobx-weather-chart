import { screen, render } from '@testing-library/react';
import Loader from '../Loader';
import weather from '../../store/weather';

describe('Loader', () => {
  it('should render when condition is true', () => {
    weather.setIsLoading(true);
    render(<Loader />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
