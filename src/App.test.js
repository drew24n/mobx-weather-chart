import { render, screen } from '@testing-library/react';
import App from './App';

test('app renders without crash', () => {
  render(<App />);
  expect(screen.getByTestId('app')).toBeInTheDocument();
});
