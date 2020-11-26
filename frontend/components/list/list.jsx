import React from "react";
import { Link } from "react-router-dom";

function ListItem({ movie, selected, ...props }) {
  
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
              <i className="fas fa-check-circle"></i>
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

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          preview: null,
        }
    }

    componentDidMount() {
        this.props.fetchLists()
    }

    render(){

        const { lists } = this.props;

        return (
        <div className="my-list">
          <div className="genre">
            <div className="list">
              {lists.map((list) => (
                <ListItem
                  key={list.id}
                  movie={list}
                  selected={this.state.preview === list.id}
                  onMouseEnter={() => this.setState({ preview: list.id })}
                  onMouseLeave={() => this.setState({ preview: null })}
                />
              ))}
            </div>
          </div>
        </div>
        )}
}

export default List;