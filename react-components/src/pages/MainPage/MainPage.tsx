import React from 'react';

import Header from '../../modules/Header';
import { IMoviesData, IMoviesResultsData } from '../../modules/Interfaces';
import MovieCard from '../../modules/MovieCard';
import SearchSpot from '../../modules/SearchSpot';
import { baseURL, API_KEY } from '../../modules/constants';

import './mainPage.css';

export default class MainPage extends React.Component {
  componentDidMount() {
    fetch(`${baseURL}/discover/movie?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((data: IMoviesData) => this.setState(data))
      .catch((err) => console.log(err.message));
  }

  render() {
    return (
      <>
        <Header />
        <SearchSpot />
        {this.state && (
          <ul className="cards-container">
            {(this.state as IMoviesData).results.map((item: IMoviesResultsData, i: number) => (
              <MovieCard movieDescr={item} key={i} />
            ))}
          </ul>
        )}
      </>
    );
  }
}
