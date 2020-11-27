import React from "react";
import { Link } from "react-router-dom";

class GenreItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      addMovieToList: null,
    };
    this.handleList = this.handleList.bind(this)
  }

   handleList(){
     const { addToList, movie, deleteListMovie, lists, currentUser } = this.props;
     const { addMovieToList } = this.state;

    //  iterate through all lists and check
    // lists.movieId === movie.id
    // && currentUser.id === userId
     
     if (addMovieToList) {
         debugger
         lists.forEach((list) => {
             if (currentUser.id === list.userId && list.movieId === movie.id){
                deleteListMovie(list.id);
             } 
         })
       this.setState({ addMovieToList: false });
     } else {
         addToList({
             user_id: this.props.currentUser.id,
             movie_id: movie.id
         });
       this.setState({ addMovieToList: true });
     }
   }

  render(){
        const { movie, selected } = this.props;
        const {addMovieToList} = this.state;
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
                </div>
            </Link>
                    <div className="list-button">
                        <button onClick={this.handleList}>
                            {addMovieToList ? (
                            <>
                                <i className="fas fa-plus-circle"></i>
                            </>
                            ) : (
                            <>
                                <i className="fas fa-check-circle"></i>
                            </>
                            )}
                        </button>
                    </div>
            </div>
        );

        const image = (
            <img width="250" src={movie.photoURL} />
        );

        return (
            <div className="genre-item" onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}>
                {selected ? preview : image}
            </div>

        )
        }
}

export default GenreItem;