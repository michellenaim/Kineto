import React from "react";
import { Link } from "react-router-dom";

class MovieMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { muted: false };
    this.changeMute = this.changeMute.bind(this);
  }

  changeMute(e) {
    e.preventDefault();
    this.setState({ muted: !this.state.muted });
  }

  render() {

    if (!this.props.movies.length){
      return null
    }

    // const { movies } = this.props;
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
  

    // const allMovies = movies.map((movie) => {
    //   return (
    //     <>
    //       <div className="main-movie-info">
    //         <p className="main-movie-title">{movie.title}</p>
    //         <p className="main-movie-des">{movie.description}</p>
    //         <div className="main-buttons">
    //           <div className="left-buttons">
    //             <button className="main-play-button">
    //               <Link to={`/`}>
    //                 <i className="fa fa-play" aria-hidden="true"></i>
    //                 &nbsp;&nbsp; Play
    //               </Link>
    //             </button>
    //             <button className="main-info-button">
    //               <Link to={`/`}>
    //                 <i className="fa fa-info-circle" aria-hidden="true"></i>
    //                 &nbsp;&nbsp; More Info
    //               </Link>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       {/* <img src={movie.photoURL}/> */}
    //       <video
    //         className="main-movie-video"
    //         muted={this.state.muted}
    //         autoPlay
    //         height="595"
    //         loop
    //         key={movie.movieURL}
    //       >
    //         <source src={movie.movieURL} type="video/mp4" />
    //         Your browser does not support the video tag.
    //       </video>
    //     </>
    //   );
    // });

    // const movie = allMovies[0];

    return (
      <div className="main-video-container">
        {sound}
        <>
          <div className="main-movie-info">
            <p className="main-movie-title">The Silence Of The Lambs</p>
            <p className="main-movie-des">FBI trainee Clarice Starling ventures into a maximum-security asylum to pick the diseased brain of Hannibal Lecter, a psychiatrist turned cannibal.</p>
            <div className="main-buttons">
              <div className="left-buttons">
                <button className="main-play-button">
                  <Link to={`/movies/1`}>
                    <i className="fa fa-play" aria-hidden="true"></i>
                    &nbsp;&nbsp; Play
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <Link to={`/movies/1`}>
            <video
              className="main-movie-video"
              muted={this.state.muted}
              autoPlay
              height="595"
              loop
            >
              <source src="https://kineto-seeds.s3-us-west-1.amazonaws.com/media/1/movie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Link>
        </>
        {/* {movie} */}
      </div>
    );
  }
}

export default MovieMain;
