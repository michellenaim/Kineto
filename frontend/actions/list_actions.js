import * as ListApiUtil from "../util/list_util";

export const RECEIVE_LIST_MOVIE = "RECEIVE_LIST_MOVIE";
export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const REMOVE_LIST_MOVIE = "REMOVE_LIST_MOVIE"

const receiveListMovie = (list) => ({
    type: RECEIVE_LIST_MOVIE,
    list,
});

const receiveLists = (lists) => {
    return{
    type: RECEIVE_LISTS,
    lists
}};

const removeListMovie = (list) => ({
    type: REMOVE_LIST_MOVIE,
    list
});

//-----------thunk actions --------------

export const fetchLists = () => (dispatch) => {
    return ListApiUtil.fetchLists().then((lists) => {
        return dispatch(receiveLists(lists));
    });
};

export const addToList = (listMovie) => (dispatch) => {
    return ListApiUtil.addToList(listMovie).then(
        (list) => dispatch(receiveListMovie(list))
    );
};

export const deleteListMovie = (listId) => (dispatch) => {
    return ListApiUtil.deleteListMovie(listId).then((list) => {
        dispatch(removeListMovie(list))
    });
};
