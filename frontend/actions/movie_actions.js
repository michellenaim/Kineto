import * as APIUtil from "../util/movie_util";
import * as SearchUtil from "../search/search_util";

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_MOVIES_BY_GENRE = "RECEIVE_MOVIES_BY_GENRE"
export const RECEIVE_ALL_MOVIES_GENRES = "RECEIVE_ALL_MOVIES_GENRES"
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies,
});

export const receiveMovie = (movie) => ({
  type: RECEIVE_MOVIE,
  movie,
});

export const receiveMoviesGenres = (moviesgenres) => {
  return{
  type: RECEIVE_ALL_MOVIES_GENRES,
  moviesgenres
  }
}

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});

export const fetchMovies = () => (dispatch) => {
  return APIUtil.fetchMovies().then((movies) => {
    dispatch(receiveMovies(movies));
  });
};

export const fetchMovie = (movieId) => (dispatch) => {
  return APIUtil.fetchMovie(movieId).then((movie) => {
    dispatch(receiveMovie(movie));
  });
};


export const fetchMoviesGenres = () => (dispatch) => {
  return APIUtil.fetchMoviesGenres().then((moviesgenres) => {
    dispatch(receiveMoviesGenres(moviesgenres))
  })
}

export const search = (search) => (dispatch) => {
  return SearchUtil.fetchSearch(search).then((movies) => {
    return dispatch(receiveMovies(movies));
  });
};
