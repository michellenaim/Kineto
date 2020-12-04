import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {filterForSearch} from "../../reducers/search_selector";
import {fetchMovies, searchByName} from "../../actions/movie_actions";
import {addToList, deleteListMovie, fetchLists} from "../../actions/list_actions";
import Search from "./search"

const mapStateToProps = (state, ownProps)=>{
    return{
        query: ownProps.match.params.query,
        movies: filterForSearch(state, ownProps.match.params.query),
        lists: Object.values(state.entities.lists)
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        searchByName:(query)=>dispatch(searchByName(query)),
        fetchMovies: () => dispatch(fetchMovies()),
        fetchLists: () => dispatch(fetchLists()),
        addToList: (listMovie) => dispatch(addToList(listMovie)),
        deleteListMovie: (listId) => dispatch(deleteListMovie(listId)),
        fetchLists: () => dispatch(fetchLists()),
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search));