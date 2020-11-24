import { connect } from "react-redux";
import {fetchList} from "../../actions/list_actions";
import List from "./list";

const mapStateToProps = (state, ownProps) => {
  return ({
    list: state.entities.lists
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchList: () => dispatch(fetchList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);