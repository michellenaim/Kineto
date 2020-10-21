import React from "react";
import { Link } from "react-router-dom";

class MovieMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { muted: false };
    this.changeMute = this.changeMute.bind(this);
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  changeMute(e) {
    e.preventDefault();
    // let mainMovie = document.getElementsByClassName("main-movie-video")
    // mainMovie.muted = !mainMovie.muted;
    this.setState({ muted: !this.state.muted });
  }

  render() {
    const { movies } = this.props;
    const { muted } = this.state;

    const sound = muted ? (
      <button className="mute" onClick={this.changeMute}>
        <i className="fas fa-volume-mute"></i>
      </button>
    ) : (
      <button className="mute" onClick={this.changeMute}>
        <i className="fas fa-volume-up"></i>
      </button>
    );

    const allMovies = movies.map((movie) => {
      return (
        <>
          <div className="main-movie-info">
            <p className="main-movie-title">{movie.title}</p>
            <p className="main-movie-des">{movie.description}</p>
            <div className="main-buttons">
              <div className="left-buttons">
                <button className="main-play-button">
                  <Link to={`/`}>
                    <i className="fa fa-play" aria-hidden="true"></i>
                    &nbsp;&nbsp; Play
                  </Link>
                </button>
                <button className="main-info-button">
                  <Link to={`/`}>
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    &nbsp;&nbsp; More Info
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* <img src={movie.photoURL}/> */}
          <video
            className="main-movie-video"
            muted={this.state.muted}
            autoPlay
            height="595"
            loop
            key={movie.movieURL}
          >
            <source src={movie.movieURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      );
    });

    const movie = allMovies[0];

    return (
      <div className="main-video-container">
        {sound}
        {movie}
      </div>
    );
  }
}

export default MovieMain;
