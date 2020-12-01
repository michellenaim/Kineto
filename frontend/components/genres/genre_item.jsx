import React from "react";
import { Link } from "react-router-dom";

class GenreItem extends React.Component {

  constructor(props){
    super(props);
    // this.state = {
    //     addMovieToList: false
    // }
    this.handleList = this.handleList.bind(this)
  }

   handleList(){

        const { addToList, movie, deleteListMovie, lists, currentUser } = this.props;
        const list = lists.find(list => list.movie_id === movie.id)

        if (list){
            deleteListMovie(list.id)
        } else {
            addToList({
                user_id: currentUser.id,
                movie_id: movie.id
            })
        }
   }

  render(){
        const { movie, selected, lists} = this.props;   
        const list = lists.find(list => list.movie_id === movie.id)
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
                            {!list ? (
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