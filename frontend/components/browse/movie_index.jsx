import React from "react";
import MovieMainContainer from "../main_movie/movie_main_container";

class MovieIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div>
        <MovieMainContainer />
      </div>
    );
  }
}

export default MovieIndex;
