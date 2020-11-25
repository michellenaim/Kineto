import { connect } from "react-redux";
import {fetchLists} from "../../actions/list_actions";
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);