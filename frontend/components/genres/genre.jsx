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
    };
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.genreId);
    this.props.fetchMovies();
  }

  render() {
    const { genre, movies } = this.props;

    if (!this.props.genre) {
      return null;
    }
    const genreMovies = movies.filter((movie) =>
      new Set(genre.movieIds).has(movie.id)
    );

    return (
      <div className="genre">
        <p className="genre-title">{genre.name}</p>
        <div className="movies">
          {genreMovies.map((movie) => (
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
