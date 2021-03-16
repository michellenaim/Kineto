import React from 'react';
import { Link } from 'react-router-dom';
import { editSearchRoute } from '../../util/search_util';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.searchQuery = this.searchQuery.bind(this);
    this.search = this.search.bind(this);

    this.searchMovie = React.createRef();
    this.input = React.createRef();

    this.state = {
      searchBarOpen: false,
    };
  }

  componentDidMount() {
    this.props.fetchGenres();
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.searchMovie && !this.searchMovie.current.contains(event.target)) {
      this.setState({ searchBarOpen: false });
      document.getElementById('search-ele').value = '';
    }
  }

  handleClickOpen(e) {
    if (this.state.searchBarOpen === false) {
      this.input.current.focus();
      this.setState({ searchBarOpen: true });
      e.target.value = '';
    }
  }

  search(e) {
    e.persist();
    if (e.target.value === '') {
      this.props.history.push('/browse');
    } else {
      this.props.history.push(editSearchRoute(e.target.value));
    }
  }

  searchQuery(event) {
    event.persist();
    setTimeout(() => this.search(event), 1000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ path: this.props.location.pathname });
    }
  }

  render() {
    const { searchBarOpen } = this.state;

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
          <p className="nav-title">
            <Link to={`/users/${this.props.currentUser.id}/lists`}>
              My List
            </Link>
          </p>
        </div>
        <div className="nav-right">
          <nav className="sub-nav">
            <div className="search-container">
              <div className="search" ref={this.searchMovie}>
                <input
                  id="search-ele"
                  onChange={this.searchQuery}
                  className={searchBarOpen ? 'toggle input' : 'input'}
                  type="text"
                  placeholder="Movie titles"
                  autoFocus
                  ref={this.input}
                ></input>
                <i
                  onClick={this.handleClickOpen}
                  className={
                    searchBarOpen
                      ? 'fas fa-search active sub-nav-logo'
                      : 'fas fa-search sub-nav-logo'
                  }
                ></i>
              </div>
            </div>
            <p className="email-nav">{this.props.currentUser.email}</p>
            <a href="https://github.com/michellenaim" target="_blank">
              <img className="github-logo" src={window.githubLogo}></img>
            </a>
            <a href="https://www.linkedin.com/in/michellenaim/" target="_blank">
              <img className="linkedin-logo" src={window.linkedinLogo}></img>
            </a>
            <button
              className="logoutbtn"
              onClick={() => {
                this.props.logout().then(() => this.props.history.push('/'));
              }}
            >
              Log Out
            </button>
          </nav>
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
          <a href="https://github.com/michellenaim" target="_blank">
            <img className="github-logo" src={window.githubLogo}></img>
          </a>
          <a href="https://www.linkedin.com/in/michellenaim/" target="_blank">
            <img className="linkedin-logo" src={window.linkedinLogo}></img>
          </a>
          {this.props.history.location.pathname !== '/login' &&
            this.props.history.location.pathname !== '/signup' && (
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
