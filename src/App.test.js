import { screen, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crash', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});
