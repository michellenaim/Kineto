import React from "react";

class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
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
      <div>
        {genreMovies.map((movie) => (
          <p> {movie.title}</p>
        ))}
      </div>
    );

    // genreMovies = []

    // const genreMovies = movies.map(movie => {
    //     if (this.props.genre.movie_ids.includes(movie.id)){
    //         genreMovies.push(this.props.movies[movie.id])
    // }})

    // genreMovies.forEach(movie => {)
    //     <div>
    //         <p className="movie-title">{movie.title}</p>
    //         <p className="movie-des">{movie.description}</p>
    //         {/* <img className="movie-image" src={movie.photo} alt=""/> is it movie.photo?
    //         <video className="movie-video" autoPlay>
    //             <source src={movie.url} type="video/mp4" />
    //                 Your browser does not support the video tag.
    //         </video> */}
    //     </div>

    // }

    // return (
    //     <div className="genre">
    //         <div>{genre.name}</div>
    //         {/* {genreMovies} */}
    //     </div>
    // )
  }
}

export default Genre;
