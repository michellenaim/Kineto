import React from "react";
import { Link } from "react-router-dom";

// Use React Ref?
// Easier to use bootstrap

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
    // debugger
    this.state = {
      preview: null,
      prevDisable: true,
      nextDisable:
      this.refs && this.refs.offsetWidth >= this.refs.scrollWidth ? true : false
    };
  }

  componentDidMount() {
    if (this.props.movies) {
      this.props.fetchMoviesGenres();
    }
    this.checkButtons(this.refs.offsetWidth, this.refs.scrollWidth)
  }

  componentDidUpdate(prevProps){
    if (this.props.genreId !== prevProps.genreId){
      this.props.fetchGenre(this.props.genreId);
    }
  }

   checkButtons(offsetWidthValue, scrollWidthValue){
    this.setState({
    prevDisable: this.refs.scrollLeft <= 0 ? true : false,
    nextDisable:
    this.refs.scrollLeft + offsetWidthValue >= scrollWidthValue ? true : false
    });
  };

  render() {
    
    if (!this.props.genre || this.props.movies.length < 1) {
      return null;
    }

    if (this.props.moviesgenres && Object.values(this.props.moviesgenres).length < 1) {
      return null;
    }
    
    const { genre, movies } = this.props;

    const offsetWidthValue = this.refs.offsetWidth;
    const scrollWidthValue = this.refs.scrollWidth;

    // const genreMovies = movies.filter((movie) =>
    //   new Set(genre.movieIds).has(movie.id)
    // );

    return (
      <div className="genre">
        <p className="genre-title">{genre.name}</p>
        <div
        className="slider-container"
        ref={el => {
          this.refs = el;
        }}
        >
        <div className="slider-wrapper">{this.props.children}</div>
        <div
          className={`btn prev ${this.state.prevDisable ? "disable" : ""}`}
          disabled={this.state.prevDisable}
          onClick={() => {
          this.refs.scrollLeft -= offsetWidthValue / 2;
          this.checkButtons(offsetWidthValue, scrollWidthValue);
          }}
          >
          {"<"}
        </div>
        <div
          className={`btn next ${this.state.nextDisable ? "disable" : ""}`}
          disabled={this.state.nextDisable}
          onClick={() => {
          this.refs.scrollLeft += offsetWidthValue / 2;
          this.checkButtons(offsetWidthValue, scrollWidthValue);
          }}
          >
          {">"}
        </div>
        </div>
        <div className="movies">
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
      </div>
    );
  }
}

export default Genre;
