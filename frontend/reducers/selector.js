export const selectMoviesByGenre = (state, genreId) => {
debugger
  const moviesgenres =  Object.values(state.entities.moviesgenres).filter((moviesgenre) => {
      // debugger
      return moviesgenre.genre_id === Number(genreId)
  })
  // debugger
  // const movievalues = Object.values(state.entities.movies).filter((movie) => {
  //   moviesgenres.map((moviesgenre) => {
  //       // debugger
  //       return moviesgenre.movie_id === movie.id
  //   })
  // })
// debugger
  let newArray = [] 
  Object.values(state.entities.movies).forEach((movie) => {
    moviesgenres.forEach((moviesgenre) => {
      // debugger
      if (moviesgenre.movie_id === movie.id) {
        // debugger
        newArray.push(movie)
      }
    })
  })
  return newArray

  // debugger
};

export default selectMoviesByGenre

//where do we get movieId from?