import React from 'react';

class WatchMovie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mouseMoving: false,
            showText: false
        }
        this.handleGoBack = this.handleGoBack.bind(this);
    }
    
    componentDidMount () {
        if (this.props.match.params.movieId) {
       this.props.fetchMovie(parseInt(this.props.match.params.movieId))};
    }

    handleGoBack(e) {
        e.preventDefault();
        this.props.history.goBack();
    }

    handleFocus(val) {
          return e => {
              this.setState({
                  showText: val
              })
          }
    }

    render () {
        const { mouseMoving, showText } = this.state;
        let arrow = <div className="arrow" onClick={this.handleGoBack}><i className="fas fa-arrow-left" onMouseEnter={this.handleFocus(true)} onMouseLeave={this.handleFocus(false)} ></i>
            {showText ? <div className="back-button">Back to Browse</div> : <div className="back-button">Back to Browse</div> } </div> ;

    if (this.props.movie === undefined) return null;

        return (
            <div className="movie-page-container">
                    {arrow}
                    <video className="watch-movie-video" src={this.props.movie.movieURL} autoPlay controls onMouseMove={this.handleMouse} />
            </div>
        );
    } 
};

export default WatchMovie;