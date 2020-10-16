import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const display = props.currentUser ? (
        <div className="navloggedin">
            <div className="nav-left">
                <Link to="/browse"><img className="kineto-logo" src={window.kinetoLogo}></img></Link>
                <Link to="/browse"><p className="nav-title">Home</p></Link>
                <p className="nav-title">Genres</p>
                <p className="nav-title">My List</p>
            </div>
            <div className="nav-right">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <button type="submit" className="search-icon"><i className="fa fa-search"></i></button>
                <p className="email-nav">{props.currentUser.email}</p>
                <button className="logoutbtn" onClick={() => {props.logout().then(() => props.history.push('/'))}}>Log Out</button>
            </div>
        </div>
    ) : (
            <div className="navloggedout">
                    <div className="nav-left">
                        <Link to="/"><img className="kineto-logo" src={window.kinetoLogo}></img></Link>
                    </div>
                    <div className="nav-right">
                    {(props.history.location.pathname !== "/login" && props.history.location.pathname !== "/signup") && (<Link className="loginbtn" to="/login">Sign In</Link>)}
                    </div>
            </div>
        );

    return (
        <header className="nav-bar">
            {display}
        </header>
    );
};

export default NavBar