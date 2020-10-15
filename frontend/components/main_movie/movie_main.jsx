import React from 'react';

class MovieMain extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        const {movies} = this.props
        return (
                <ul>
                    {movies.map((movie) => (
                    <div>
                        <p className="test">{movie.title}</p>
                        <p className="test">{movie.description}</p>
                        <p className="test">{movie.year}</p>
                    </div>))}
                </ul>
        )
    }
} 

export default MovieMain