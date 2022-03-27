import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../modules/Header';

test('Renders Header links', () => {
  render(<Header />, { wrapper: BrowserRouter });
  const logoLink = screen.getByText(/React Components/i);
  const mainLink = screen.getByText(/Main Page/i);
  const aboutUs = screen.getByText(/About Us/i);
  expect(logoLink).toBeInTheDocument();
  expect(mainLink).toBeInTheDocument();
  expect(aboutUs).toBeInTheDocument();
});
