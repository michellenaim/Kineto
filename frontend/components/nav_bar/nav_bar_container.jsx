import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';

const Test = function(props) {
    return <NavBar 
        currentUser={props.currentUser}
        logout={props.logout}
        path={props.history.location.pathname} 
        />;
}

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
