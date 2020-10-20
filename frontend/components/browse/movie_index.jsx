import React from "react";
import MovieMainContainer from "../main_movie/movie_main_container";
import GenreContainer from "../genres/genre_container";

class MovieIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovies();
    this.props.fetchGenres();
  }

  render() {
    return (
      <div>
        <MovieMainContainer />
        {this.props.genres.map((genre) => {
          return <GenreContainer genreId={genre.id} />
        })}
      </div>
    );
  }
}

export default MovieIndex;
