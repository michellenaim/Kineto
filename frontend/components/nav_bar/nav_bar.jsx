import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>Home</p>
            <p>Genres</p>
            <p>My List</p>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <input type="text" placeholder="Search.." name="search"></input>
                    <button type="submit"><i class="fa fa-search"></i></button>
            <p>{currentUser.email}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
            <div>
                <Link className="btn" to="/signup">Sign Up</Link>
                &nbsp;
                <Link className="btn" to="/login">Log In</Link>
            </div>
        );

    return (
        <header className="nav-bar">
            <img className="kineto-logo" src={window.kinetoLogo}></img>
            <div>
                {display}
            </div>
        </header>
    );
};

export default NavBar