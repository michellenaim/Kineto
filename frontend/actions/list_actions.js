import * as ListApiUtil from "../util/list_util";

export const RECEIVE_LIST_MOVIE = "RECEIVE_LIST_MOVIE";
export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const REMOVE_LIST_MOVIE = "RECEIVE_LIST_MOVIE"

const receiveListMovie = (listMovie) => ({
    type: RECEIVE_LIST_MOVIE,
    listMovie,
});

const receiveList = (list) => ({
    type: RECEIVE_LIST,
    list
});

const removeListMovie = (listId) => ({
    type: REMOVE_LIST_MOVIE,
    listId
});

//-----------thunk actions --------------

export const fetchList = () => (dispatch) => {
    // debugger
    return ListApiUtil.fetchList().then((list) => {
        return dispatch(receiveList(list));
    });
};

export const addToList = (listMovie) => (dispatch) => {
    return ListApiUtil.addToList(listMovie).then(
        (listMovie) => dispatch(receiveListMovie(listMovie))
    );
};

export const deleteListMovie = (listId) => (dispatch) => {
    return ListApiUtil.deleteListMovie(listId).then((listId) => dispatch(removeListMovie(listId)));
};
