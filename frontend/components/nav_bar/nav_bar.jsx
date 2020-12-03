import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.state = {
      searchBarOpen: false,
    };
  }

  componentDidMount() {
    this.props.fetchGenres();
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event){
    if (this.refs.search && !this.refs.search.contains(event.target)){
      this.setState({ searchBarOpen: false });
    }
  }

  handleClickOpen() {
    if(this.state.searchBarOpen === false){
      this.refs.input.focus()
      this.setState({ searchBarOpen: true });
    }
  }

  submitSearch(e){
    if(this.state.searchBarOpen === true && e.key === 'Enter'){
      this.props.clearSearch();
      this.props.search(e.target.value)
      this.forceUpdate()
      if(this.props.history.location.pathname !== './search'){     
        this.props.history.push("/search");
      }
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
          <p className="nav-title"><Link to={`/users/${this.props.currentUser.id}/lists`}>My List</Link></p>
        </div>
        <div className="nav-right">
          <nav className="sub-nav">
          <div className="search-container">
            <div className="search" ref="search">
              <input
                onKeyUp={this.submitSearch}
                className={searchBarOpen ? "toggle input" : "input"}
                type="text"
                placeholder="Movie titles"
                autoFocus
                ref='input'
              ></input>
              <i
                onClick={this.handleClickOpen}
                className={
                  searchBarOpen
                    ? "fas fa-search active sub-nav-logo"
                    : "fas fa-search sub-nav-logo"
                }
              ></i>
            </div>
          </div>
          <p className="email-nav">{this.props.currentUser.email}</p>
          <button
            className="logoutbtn"
            onClick={() => {
              this.props.logout().then(() => this.props.history.push("/"));
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
