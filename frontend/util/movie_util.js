export const fetchMovies = () => {
  return $.ajax({
    url: `/api/movies`,
    method: "get",
  });
};

export const fetchMovie = (movieId) => {
  return $.ajax({
    url: `api/movies/${movieId}`,
    method: "get",
  });
};

export const fetchMoviesGenres = () => {
  return $.ajax({
    url: `api/movies_genres`,
    method: "get",
  });
}