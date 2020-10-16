import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';


class MovieMain extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        const {movies} = this.props
        const allMovies = movies.map((movie) => {
            return (
                <span >
                    <div className="main-movie-info">
                        <p className="main-movie-title">{movie.title}</p>
                        <p className="main-movie-des">{movie.description}</p>
                        <div className="main-buttons">
                            <button className="main-play-button"><Link to={`/`}><i className="fa fa-play" aria-hidden="true"></i>&nbsp;&nbsp; Play</Link></button>
                            <button className="main-info-button"><Link to={`/`}><i className="fa fa-info-circle" aria-hidden="true"></i>&nbsp;&nbsp; More Info</Link></button>
                        </div>
                    </div>
                    {/* <img src={movie.photoURL}/> */}
                    <video className="main-movie-video" muted="true" autoPlay height="595" loop key={movie.movieURL}>
                        <source src={movie.movieURL} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </span>
            )
        })

        const movie = allMovies[0]

        return (
            <div className="main-video-container">
                {movie}
            </div>
        )
    }
} 

export default MovieMain
