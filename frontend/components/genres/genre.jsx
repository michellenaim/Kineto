import React from "react";

function GenreItem({ movie, selected, ...props }) {
  const preview = (
    <video
      className="movie-video"
      autoPlay
      height="100%"
      key={movie.movieURL}
    >
      <source src={movie.movieURL} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
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
        {genre.name}
        <div className="movies">
          {genreMovies.map((movie) => (
            <GenreItem
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
