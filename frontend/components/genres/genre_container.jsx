import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {fetchGenre} from "../../actions/genre_actions";
import { fetchMoviesGenres } from "../../actions/movie_actions"
import selectMoviesByGenre from "../../reducers/selector"
import Genre from "./genre";

const mapStateToProps = (state, ownProps) => {
  const genreId = ownProps.genreId || ownProps.match.params.genreId;
  return ({
    genre: state.entities.genres[genreId],
    genreId,
    movies: selectMoviesByGenre(state, genreId),
    moviesgenres: state.entities.moviesgenres
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGenre: (genre) => dispatch(fetchGenre(genre)),
    fetchMoviesGenres: () => dispatch(fetchMoviesGenres())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Genre));
