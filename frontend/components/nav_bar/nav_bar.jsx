import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ path, currentUser, logout }) => {
    const display = currentUser ? (
        <div className="navloggedin">
            <div className="nav-left">
                <Link to="/"><img className="kineto-logo" src={window.kinetoLogo}></img></Link>
                <p className="nav-title">Home</p>
                <p className="nav-title">Genres</p>
                <p className="nav-title">My List</p>
            </div>
            <div className="nav-right">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <button type="submit" className="search-icon"><i className="fa fa-search"></i></button>
                <p className="email-nav">{currentUser.email}</p>
                <button className="btn" onClick={logout}>Log Out</button>
            </div>
        </div>
    ) : (
            <div>
                <Link to="/"><img className="kineto-logo" src={window.kinetoLogo}></img></Link>
                {(path !== "/login" && path !== "/signup") && (<Link className="btn" to="/login">Sign In</Link>)}
            </div>
        );

    return (
        <header className="nav-bar">
            {display}
        </header>
    );
};

export default NavBar