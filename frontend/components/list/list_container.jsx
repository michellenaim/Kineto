import { connect } from "react-redux";
import {fetchLists, deleteListMovie} from "../../actions/list_actions";
import {fetchMovies} from "../../actions/movie_actions"
import List from "./list";

const mapStateToProps = (state, ownProps) => {
    // debugger
  return ({
    lists: Object.values(state.entities.lists),
    movies: Object.values(state.entities.movies)
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchLists: () => dispatch(fetchLists()),
    deleteListMovie: (listId) => dispatch(deleteListMovie(listId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);