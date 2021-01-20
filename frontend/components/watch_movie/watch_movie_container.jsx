import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/movie_actions';
import WatchMovie from './watch_movie';

const mapStateToProps = (state, ownProps) => {
    return {
        movie: state.entities.movies[ownProps.match.params.movieId]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
    }
};

export default (connect(mapStateToProps, mapDispatchToProps)(WatchMovie));