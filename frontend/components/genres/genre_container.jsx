import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchGenre, fetchGenres} from "../../actions/genre_actions";
import { fetchMoviesGenres } from "../../actions/movie_actions"
// import { fetchMovies } from "../../actions/movie_actions";
import {selectMoviesByGenre} from "../../reducers/selector"
import Genre from "./genre";

const mapStateToProps = (state, ownProps) => {
  // debugger
  const genreId = ownProps.genreId || ownProps.match.params.genreId;
  return ({
    genre: state.entities.genres[genreId],
    genreId,
    genres: Object.values(state.entities.genres),
    // movies: Object.values(state.entities.movies),
    movies: selectMoviesByGenre(state, genreId),
    moviesgenres: state.entities.moviesgenres
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
    fetchGenre: (genre) => dispatch(fetchGenre(genre)),
    fetchMoviesGenres: () => dispatch(fetchMoviesGenres())
    // fetchMovies: () => dispatch(fetchMovies()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Genre));
