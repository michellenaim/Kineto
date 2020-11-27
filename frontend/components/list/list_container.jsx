import { connect } from "react-redux";
import {fetchLists, deleteListMovie} from "../../actions/list_actions";
import List from "./list";

const mapStateToProps = (state, ownProps) => {
    // debugger
  return ({
    lists: Object.values(state.entities.lists), 
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLists: () => dispatch(fetchLists()),
    deleteListMovie: (listId) => dispatch(deleteListMovie(listId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);