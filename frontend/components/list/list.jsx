import React from "react";
import GenreItem from "../genres/genre_item"

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          preview: null,
        }
    }

    componentDidMount() {
      this.props.fetchMovies()
      this.props.fetchLists()
    }

    render(){
        const { lists, movies } = this.props;
        let noList;
        if (!this.props.lists.length) {
          noList = (
          <p> You haven't added any movies to your list yet!</p>
        )}
        return (
        <div className="my-list">
           <div className="genre">
            <div className="list">
              {movies.map((movie) => {
                return lists.map((list) => {
                  if (movie.id === list.movie_id){
                    return (
                    <GenreItem
                      key={list.id}
                      movie={movie}
                      selected={this.state.preview === list.id}
                      // isFavorite={lists.find(l => l.movie_id === list.id)}
                      deleteListMovie={this.props.deleteListMovie}
                      onMouseEnter={() => this.setState({ preview: list.id })}
                      onMouseLeave={() => this.setState({ preview: null })}
                      lists={lists}
                    />
                    )}
                })
              })}
              {noList}
            </div>
          </div>
        </div>
        )}
}

export default List;