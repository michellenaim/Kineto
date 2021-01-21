import React from "react";
import GenreItem from "./genre_item"

class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: null,
      left: 0
    };
    this.slider = React.createRef()
  };

  componentDidMount() {
    if (this.props.movies) {
      this.props.fetchMoviesGenres();
    }
    this.props.fetchLists();
    this.props.fetchGenre(this.props.genreId);
  }

  componentDidUpdate(prevProps){
    if (this.props.genreId !== prevProps.genreId && this.props.genreId !== "users"){
      this.props.fetchGenre(this.props.genreId);
    }
  }

   scroll(direction){
        let offset;
        direction === 'left' ? offset = -800 : offset = 800;
        let width = this.slider.current.scrollWidth;
        let newPosition = this.slider.current.scrollLeft + offset ;
        let overflow = newPosition === width;
        if(overflow) this.slider.current.scrollTo(0,0);
        if((newPosition < 8 )&&(direction === 'left')) this.slider.current.scrollTo(width,0);
          this.slider.current.scrollBy(offset ,0)  
    }

  render() {
    // debugger 

    if (!this.props.genre || this.props.movies.length < 1) {
      return null;
    }

    if (this.props.moviesgenres && Object.values(this.props.moviesgenres).length < 1) {
      return null;
    }
    
    const { genre, movies } = this.props;

    // const genreMovies = movies.filter((movie) =>
    //   new Set(genre.movieIds).has(movie.id)
    // );
    const rowLen = movies.length

    return (
      <div className="genre">
        <p className="genre-title">{genre.name}</p>
        <div className="btn prev" onClick={() => this.scroll('left')}>{"<"}</div>
          <div className="movies" ref={this.slider}>
            {movies.map((movie, i) => {
              if (movies.length - 1 === i){
                return(
                  <div>
                      <GenreItem
                      key={movie.id}
                      movie={movie}
                      selected={this.state.preview === movie.id}
                      onMouseEnter={() => this.setState({ preview: movie.id })}
                      onMouseLeave={() => this.setState({ preview: null })}
                      deleteListMovie={this.props.deleteListMovie}
                      addToList={this.props.addToList}
                      currentUser={this.props.currentUser}
                      lists={this.props.lists}
                    />
                    {/* <div className="extra-space"></div> */}
                  </div>
                )
              } else {
                return(
                <GenreItem
                  key={movie.id}
                  movie={movie}
                  selected={this.state.preview === movie.id}
                  onMouseEnter={() => this.setState({ preview: movie.id })}
                  onMouseLeave={() => this.setState({ preview: null })}
                  deleteListMovie={this.props.deleteListMovie}
                  addToList={this.props.addToList}
                  currentUser={this.props.currentUser}
                  lists={this.props.lists}
                />
                )}
            }
            )}
          </div>
         <div className="btn next" onClick={() => this.scroll('right')}>{">"}</div> 
      </div>
    );
  }
}

export default Genre;
