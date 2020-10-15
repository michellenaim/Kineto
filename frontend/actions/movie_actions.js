import * as APIUtil from '../util/movie_util';

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});

export const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie,
});
  

export const fetchMovies = () => (dispatch) => {
  return APIUtil.fetchMovies()
    .then(movies => {dispatch(receiveMovies(movies))});
}    

export const fetchMovie = (movieId) => (dispatch) => {
  return APIUtil.fetchMovie(movieId).then(movie => {
    dispatch(receiveMovie(movie))});
}    


