import React from 'react';

import Header from '../../modules/Header';
import { IMoviesData, IMoviesResultsData } from '../../modules/Interfaces';
import MovieCard from '../../modules/MovieCard';
import SearchSpot from '../../modules/SearchSpot';

import './mainPage.css';

const endpoint = 'https://api.themoviedb.org/3';
const API_KEY = '224ce27b38a3805ecf6f6c36eb3ba9d0';
const url = `${endpoint}/discover/movie?api_key=${API_KEY}&language=en-US`;

export default class MainPage extends React.Component {
  componentDidMount() {
    fetch(url)
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
