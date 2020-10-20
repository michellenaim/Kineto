import React from "react";
import { connect } from "react-redux";
import MovieIndex from "./movie_index";
import { withRouter } from "react-router-dom";
import { fetchMovies } from "../../actions/movie_actions";

const mapStateToProps = (state) => ({
  movies: state.entities.movies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieIndex)
);
