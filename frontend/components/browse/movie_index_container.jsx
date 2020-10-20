import React from "react";
import { connect } from "react-redux";
import MovieIndex from "./movie_index";
import { withRouter } from "react-router-dom";
import { fetchMovies } from "../../actions/movie_actions";
import { fetchGenre, fetchGenres } from "../../actions/genre_actions";

const mapStateToProps = (state, ownProps) => {
  const genreId = ownProps.match.params.genreId;
  return {
    genre: state.entities.genres[genreId],
    genreId,
    genres: Object.values(state.entities.genres),
    movies: Object.values(state.entities.movies),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchGenres: () => dispatch(fetchGenres()),
  fetchGenre: (genre) => dispatch(fetchGenre(genre)),
  fetchMovies: () => dispatch(fetchMovies()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieIndex)
);
