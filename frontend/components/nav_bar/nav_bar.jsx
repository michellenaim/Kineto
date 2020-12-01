import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenres();
  }

  render() {
    const display = this.props.currentUser ? (
      <div className="navloggedin">
        <div className="nav-left">
          <Link to="/browse">
            <img className="kineto-logo" src={window.kinetoLogo}></img>
          </Link>
          <Link to="/browse">
            <p className="nav-title">Home</p>
          </Link>
          <div id="genre-link">
            Genres
            <ul className="genre-list">
              <i className="fas fa-caret-up genre-caret"></i>
              {this.props.genres.map((genre) => {
                return (
                  <li key={genre.id} className="genre-name">
                    <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="nav-title"><Link to={`/users/${this.props.currentUser.id}/lists`}>My List</Link></p>
        </div>
        <div className="nav-right">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <button type="submit" className="search-icon">
            <i className="fa fa-search"></i>
          </button>
          <p className="email-nav">{this.props.currentUser.email}</p>
          <button
            className="logoutbtn"
            onClick={() => {
              this.props.logout().then(() => this.props.history.push("/"));
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    ) : (
      <div className="navloggedout">
        <div className="nav-left">
          <Link to="/">
            <img className="kineto-logo" src={window.kinetoLogo}></img>
          </Link>
        </div>
        <div className="nav-right">
          {this.props.history.location.pathname !== "/login" &&
            this.props.history.location.pathname !== "/signup" && (
              <Link className="loginbtn" to="/login">
                Sign In
              </Link>
            )}
        </div>
      </div>
    );

    return <header className="nav-bar">{display}</header>;
  }
}

export default NavBar;
