import { connect } from "react-redux";
import { fetchGenre, fetchGenres } from "../../actions/genre_actions";
import { fetchMovies } from '../../actions/movie_actions';
import Genre from "./genre";

const mapStateToProps = (state, ownProps) => {
    const genreId = ownProps.match.params.genreId
    return {
        genre: state.entities.genres[genreId],
        genreId,
        genres: Object.values(state.entities.genres),
        movies: Object.values(state.entities.movies)
    };
};

const mapDispatchToProps = dispatch => {
    return {
    fetchGenres: () => dispatch(fetchGenres()),
    fetchGenre: (genre) => dispatch(fetchGenre(genre)),
    fetchMovies: () => dispatch(fetchMovies()),    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Genre);