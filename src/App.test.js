import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRedux } from './helpers/testExtension';

describe('App', () => {
  it('renders without crash', () => {
    renderWithRedux(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});
