import React from "react";
import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { logout } from "../../actions/session_actions";
import { fetchGenres } from "../../actions/genre_actions";
import { withRouter } from "react-router-dom";
import {searchByName} from "../../actions/movie_actions"

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  genres: Object.values(state.entities.genres),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchGenres: () => dispatch(fetchGenres()),
  searchByName: (name) => dispatch(searchByName(name)),
  // clearSearch: () => dispatch(clearSearch())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
