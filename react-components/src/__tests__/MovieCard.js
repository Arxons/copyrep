import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MovieCard from '../modules/MovieCard';

function storageMock() {
  let storage = {};

  return {
    setItem: function (key, value) {
      storage[key] = value || '';
    },
    getItem: function (key) {
      return key in storage ? storage[key] : null;
    },
    removeItem: function (key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function (i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    },
  };
}

window.localStorage = storageMock();

const movieData = {
  backdrop_path: '/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg',
  original_language: 'en',
  poster_path: '/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
  release_date: '2022-03-10',
  title: 'Turning Red',
  vote_average: 7.5,
};

test('Renders movie card with details', () => {
  render(<MovieCard movieDescr={movieData} />);
  const poster = screen.getByRole('img');
  const title = screen.getByText(/Turning Red/i);
  const releaseDate = screen.getByText(/2022-03-10/i);
  const originalLanguage = screen.getByText(/en/i);
  const voteAverage = screen.getByText(/7.5/i);

  expect(poster).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(releaseDate).toBeInTheDocument();
  expect(originalLanguage).toBeInTheDocument();
  expect(voteAverage).toBeInTheDocument();
});
