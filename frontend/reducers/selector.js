export const selectMoviesByGenre = (state, genreId) => {
  debugger

  const moviesgenres =  Object.values(state.entities.moviesgenres).filter((moviesgenre) => {
      debugger
      return moviesgenre.genre_id === genreId
  })
  return Object.values(state.entities.movies).filter((movie) => {
    moviesgenres.map((moviesgenre) => {
        debugger
        return moviesgenre.movie_id === movie.id
    })
  })
};

export default selectMoviesByGenre

//where do we get movieId from?