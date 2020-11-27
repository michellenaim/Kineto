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
        this.props.fetchLists()
    }

    render(){

        const { lists } = this.props;

        return (
        <div className="my-list">
          <div className="genre">
            <div className="list">
              {lists.map((list) => (
                <GenreItem
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