import React from 'react';
import SignupContainer from './session/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import LogInFormContainer from './session/login_form_container';
import HomeContainer from './home/home_container';
import MovieIndexContainer from "./browse/movie_index_container"
import GenreContainer from "./genres/genre_container"


export default () => (
    <React.Fragment>
            <Route path="/" component={NavBarContainer} />
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <ProtectedRoute path="/browse" component={MovieIndexContainer} />
            <ProtectedRoute path="/genre/:genreId" component={GenreContainer} />
            <Redirect from='/*' to="/"/>
        </Switch>
    </React.Fragment>
);