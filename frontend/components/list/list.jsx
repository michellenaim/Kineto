import React from "react";
import { Link } from "react-router-dom";
import GenreItem from "../genres/genre"

class List extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchList()
    }

    render(){
        <div className="genre">
            <p>Hello! testing!</p>
        {/* <div className="movies">
          {this.props.movies.map((movie) => (
            <GenreItem
              key={movie.id}
              movie={movie}
              selected={this.state.preview === movie.id}
              onMouseEnter={() => this.setState({ preview: movie.id })}
              onMouseLeave={() => this.setState({ preview: null })}
            />
          ))}
        </div> */}
      </div>
    }
}

export default List;