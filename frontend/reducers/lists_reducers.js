import { RECEIVE_LIST, RECEIVE_LIST_MOVIE, REMOVE_LIST_MOVIE } from "../actions/list_actions";

const listsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    // debugger
    switch (action.type) {
        case RECEIVE_LIST:
            nextState = action.lists;
            return nextState;
        case RECEIVE_LIST_MOVIE:
            nextState[action.list.id] = action.list;
            return nextState;
        case REMOVE_LIST_MOVIE:
            delete nextState[action.list.id];
            return nextState;
        default:
            return state;
    }
};

export default listsReducer;
