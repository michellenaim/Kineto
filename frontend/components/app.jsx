import React from 'react';
import SignupContainer from './session/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import LogInFormContainer from './session/login_form_container';


export default () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
    </div>
);