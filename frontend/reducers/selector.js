export const selectMoviesByGenre = (state, movie_ids) => {
  return Object.values(state.entities.movies).filter((movie) => {
    return movie.id === moviegenre.movie_id;
  });
};

// how to get access to moviegenre??
