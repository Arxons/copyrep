export interface IMovieProps {
  movieDescr: IMoviesResultsData;
}

export interface IMoviesData extends Object {
  results: Array<IMoviesResultsData>;
}

export interface IMoviesResultsData extends Object {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
