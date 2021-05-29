import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRedux } from './helpers/testExtension';

describe('App', () => {
  it('renders without crash', () => {
    renderWithRedux(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });

  it('renders 1 component', () => {
    renderWithRedux(<App />);
    expect(screen.getByTestId('app').children.length).toBe(1);
  });
});
