import React from 'react';
import SignupContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import LogInFormContainer from './session/login_form_container';
import HomeContainer from './home/home_container';
import MovieIndexContainer from './browse/movie_index_container';
import GenreContainer from './genres/genre_container';
import ListContainer from './list/list_container';
import SearchContainer from './search/search_container';
import WatchMovieContainer from './watch_movie/watch_movie_container';
import Footer from './footer/footer';

export default () => (
  <React.Fragment>
    <Route path="/" component={NavBarContainer} />
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <ProtectedRoute path="/search/:query" component={SearchContainer} />
      <ProtectedRoute path="/browse" component={MovieIndexContainer} />
      <ProtectedRoute path="/genres/:genreId" component={GenreContainer} />
      <ProtectedRoute path="/users/:userId/lists" component={ListContainer} />
      <ProtectedRoute path="/movies/:movieId" component={WatchMovieContainer} />
      <Redirect from="/*" to="/" />
    </Switch>
    <Route path="/browse" component={Footer} />
    <Route path="/users/:userId/lists" component={Footer} />
  </React.Fragment>
);
