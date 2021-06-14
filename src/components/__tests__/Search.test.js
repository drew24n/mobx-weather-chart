import { screen, render } from '@testing-library/react';
import Search from '../Search';

describe('Search', () => {
  it('should render 2 inputs', () => {
    render(<Search />);
    expect(screen.getByTestId('search').children.length).toBe(2);
  });

  it('should render text input field', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText('enter city')).toBeInTheDocument();
  });

  it('should render submit input button', () => {
    render(<Search />);
    expect(screen.getByDisplayValue('Search')).toBeInTheDocument();
  });
});
