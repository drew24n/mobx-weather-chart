import { screen } from '@testing-library/react';
import Search from '../Search';
import { renderWithRedux } from '../../helpers/testExtension';

describe('Search', () => {
  it('should render 2 inputs', () => {
    renderWithRedux(<Search />);
    expect(screen.getByTestId('search').children.length).toBe(2);
  });

  it('should render text input field', () => {
    renderWithRedux(<Search />);
    expect(screen.getByPlaceholderText('enter city')).toBeInTheDocument();
  });

  it('should render submit input button', () => {
    renderWithRedux(<Search />);
    expect(screen.getByDisplayValue('Search')).toBeInTheDocument();
  });
});
