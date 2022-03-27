import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchSpot from '../modules/SearchSpot';

test('Renders search spot', () => {
  render(<SearchSpot />);
  const searchTitle = screen.getByText(/Search something/i);
  expect(searchTitle).toBeInTheDocument();
});
