import React from "react";
import { connect } from "react-redux";
import MovieIndex from "./movie_index";
import { withRouter } from "react-router-dom";
import { fetchMovies } from "../../actions/movie_actions";
import { fetchGenre, fetchGenres } from "../../actions/genre_actions";

const mapStateToProps = (state) => {
  // debugger
  return {
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
