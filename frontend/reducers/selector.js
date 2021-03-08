const selectMoviesByGenre = (state, genreId) => {
  const moviesgenres =  Object.values(state.entities.moviesgenres).filter((moviesgenre) => {
      return moviesgenre.genre_id === Number(genreId)
  })

  let newArray = [] 
  Object.values(state.entities.movies).forEach((movie) => {
    moviesgenres.forEach((moviesgenre) => {
      if (moviesgenre.movie_id === movie.id) {
        newArray.push(movie)
      }
    })
  })

  return newArray

};

export default selectMoviesByGenre;

