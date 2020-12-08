import React from "react";
// import SearchVideoList from './search_video_list';
import GenreItem from "../genres/genre_item"

class Search extends React.Component {
  constructor(props){
        super(props);

        this.debounceTimer = undefined;
        this.debounce = this.debounce.bind(this);
        
        this.state = {
          preview: null,
          left: 0
        };
    }

    componentDidMount(){
      this.props.fetchMovies()
    }

    componentDidUpdate(prevState){
        const query = this.props.query; 
        if(prevState.query != query){
            this.debounce(()=>{
                if(query.length > 0)
                    this.props.searchByName(query)
            }, 2000)();
        }
    }

    debounce(func, delay){ 
        return ()=> { 
            if(this.debounceTimer)
                clearTimeout(this.debounceTimer) 
            this.debounceTimer  = setTimeout(func, delay) 
        } 
    }

    makeSlices(movies, elementToSkip = 6){
        if(Object.values(movies).length ==0){
            return (
                <>
                </>
            )
        }
        return (
            <>
            <div className='genre'>
                <div className="search-items">
                    {movies.map((movie) => (
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
                    ))}
                </div>
            </div>
            <>
                {
                    this.makeSlices(movies.slice(elementToSkip), elementToSkip)
                }
            </>
            </>
        )
    }

    render() {
        return (
            <div>
                <div className="search-results">
                    {
                      this.props.movies.length > 0 ? this.makeSlices(this.props.movies) :
                      <div>
                          <p className="not-found">
                            {`Your search for "${this.props.query}" did not have any matches. Suggestions:`} </p>
                            <ul className="listing">
                                <li>Try different keywords</li>
                                <li>Try using a movie title</li>
                            </ul>
                      </div> 
                    }
                </div>
            </div>
        );
    }

}

export default Search;