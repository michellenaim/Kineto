import { RECEIVE_LISTS, RECEIVE_LIST_MOVIE, REMOVE_LIST_MOVIE } from "../actions/list_actions";

const listsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    // debugger
    switch (action.type) {
        case RECEIVE_LISTS:
            nextState = action.lists;
            return nextState;
        case RECEIVE_LIST_MOVIE:
            const idx = Object.keys(action.list)[0];
            nextState[idx] = action.list[idx];
            return nextState;
        case REMOVE_LIST_MOVIE:
            delete nextState[Object.keys(action.list)[0]];
            return nextState;
        default:
            return state;
    }
};

export default listsReducer;
