import { connect } from 'react-redux';
import { fetchGenres } from '../../actions/movie_actions';
import MovieMain from './movie_main';


const mapStateToProps = state => {
    return {
        movies: Object.values(state.entities.movies),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: () => dispatch(fetchMovies())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieMain);