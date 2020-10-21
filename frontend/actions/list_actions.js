import * as ListApiUtil from "../util/list_util";

export const RECEIVE_LIST_MOVIE = "RECEIVE_LIST_MOVIE";
export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const REMOVE_LIST_MOVIE = "RECEIVE_LIST_MOVIE"

const receiveListMovie = (listMovie) => ({
    type: RECEIVE_LIST_MOVIE,
    listMovie,
});

const receiveList = (lists) => ({
    type: RECEIVE_LISTS,
    lists
});

const removeListMovie = (listId) => ({
    type: REMOVE_LIST_MOVIE,
    listId
});

//-----------thunk actions --------------

export const fetchList = () => (dispatch) => {
    return ListApiUtil.fetchList().then((list) => {
        return dispatch(receiveList(list));
    });
};

export const addToList = (listMovie) => (dispatch) => {
    return ListApiUtil.addToList(listMovie).then(
        (listMovie) => dispatch(receiveListMovie(listMovie))
    );
};

export const deleteListItem = (listId) => (dispatch) => {
    return ListApiUtil.deleteListItem(listId).then((listId) => dispatch(removeListMovie(listId)));
};
