import React from 'react';

import { IMoviesResultsData, IMovieProps } from './Interfaces';

export default class MovieCard extends React.Component<IMovieProps, IMoviesResultsData> {
  results: IMoviesResultsData;
  constructor(props: IMovieProps) {
    super(props);
    console.log(props);
    this.results = props.movieDescr;
  }

  render() {
    return (
      <li className="card-container">
        <div className="poster-container">
          <img
            src={`https://image.tmdb.org/t/p/original${this.results.poster_path}`}
            className="card-item__poster"
            alt="movie-poster"
          />
        </div>
        <span className="card-item__title">{this.results.title}</span>
        <span className="card-item__release-date">Release Date: {this.results.release_date}</span>
        <span className="card-item__original-language">
          Original Language: {this.results.original_language}
        </span>
        <span className="card-item__rating">Rating: {this.results.vote_average}</span>
      </li>
    );
  }
}
