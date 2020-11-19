import React from "react";
import MovieMain from "../main_movie/movie_main";
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
    if (this.props.genres.length < 1) {
      return null
    }
  
    return (
      <div>
        <MovieMain key={this.props.movies.id} movies={this.props.movies} fetchMovies={this.props.fetchMovies}/>
        {this.props.genres.map((genre) => {
          return <GenreContainer genreId={genre.id} genres={this.props.genres} fetchGenres={this.props.fetchGenres}/>
        })}
      </div>
    );
  }
}

export default MovieIndex;
