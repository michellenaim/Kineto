import React from "react";
import { Link } from "react-router-dom";

function GenreItem({ movie, selected, ...props }) {
  
  const preview = (
    <div className="movie-item">
      <Link to={`/movies/${movie.id}`}>
        <video
          className="movie-video"
          autoPlay
          height="100%"
          key={movie.movieURL}
        >
          <source src={movie.movieURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="movie-info">
          <div className="movie-info-left">
            <p className="movie-title">{movie.title}</p>
            <p className="movie-runtime">{movie.runtime}</p>
          </div>
          <div>
            <div className="list-button">
              <i className="fas fa-plus-circle"></i>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

  const image = (
      <img width="250" src={movie.photoURL} />
  );

  return (
      <div className="genre-item" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
        {selected ? preview : image}
    </div>

  )
}

class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: null,
      left: 0
    };
    this.slider = React.createRef()
  }

  componentDidMount() {
    if (this.props.movies) {
      this.props.fetchMoviesGenres();
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.genreId !== prevProps.genreId){
      this.props.fetchGenre(this.props.genreId);
    }
  }

   scroll(direction){
        let offset;
        direction === 'left' ? offset = -800 : offset = 800;
        let width = this.slider.current.scrollWidth;
        let newPosition = this.slider.current.scrollLeft + offset ;
        let overflow = newPosition === width;
        if(overflow) this.slider.current.scrollTo(0,0);
        if((newPosition < 8 )&&(direction === 'left')) this.slider.current.scrollTo(width,0);
          this.slider.current.scrollBy(offset ,0)  
    }

  render() {
    
    if (!this.props.genre || this.props.movies.length < 1) {
      return null;
    }

    if (this.props.moviesgenres && Object.values(this.props.moviesgenres).length < 1) {
      return null;
    }
    
    const { genre, movies } = this.props;

    // const genreMovies = movies.filter((movie) =>
    //   new Set(genre.movieIds).has(movie.id)
    // );

    return (
      <div className="genre">
        <p className="genre-title">{genre.name}</p>
    <div className="btn prev" onClick={() => this.scroll('left')}>{"<"}</div>
        <div className="movies" ref={this.slider}>
          {movies.map((movie) => (
            <GenreItem
              key={movie.id}
              movie={movie}
              selected={this.state.preview === movie.id}
              onMouseEnter={() => this.setState({ preview: movie.id })}
              onMouseLeave={() => this.setState({ preview: null })}
            />
          ))}
        </div>
         <div className="btn next" onClick={() => this.scroll('right')}>{">"}</div> 
      </div>
    );
  }
}

export default Genre;
