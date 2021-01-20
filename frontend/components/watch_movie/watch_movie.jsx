import React from 'react';

class WatchMovie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mouseMoving: false,
            showText: false
        }
        this.clearArrow;
        this.handleMouse = this.handleMouse.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.videoEndHandler = this.videoEndHandler.bind(this);
    }
    
    componentDidMount () {
        if (this.props.match.params.movieId) {
       this.props.fetchMovie(parseInt(this.props.match.params.movieId))};
    }

    handleMouse(e) {
        e.preventDefault();
        this.setState({
            mouseMoving: true 
        })

        let showArrow = () => {
            clearTimeout(this.clearArrow);
            this.clearArrow = setTimeout(() => this.setState({ mouseMoving: false}), 4000)
        }
        
        showArrow();
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
   
    videoEndHandler() {
        this.setState({
            mouseMoving: true,
            showText: true
        })
    }

    render () {
        const { mouseMoving, showText } = this.state;
        let arrow = mouseMoving ? <div className="arrow" onClick={this.handleGoBack}><i className="fas fa-arrow-left hoveri" onMouseEnter={this.handleFocus(true)} onMouseLeave={this.handleFocus(false)} ></i>
            {showText ? <div className="back-to">&nbsp; Back to Browse</div> : "" } </div> : "" ;

    if (this.props.movie === undefined) return null;

        return (
            <div className="movie-page-container">
                <div className="show-page-video-container">
                    {arrow}
                    <video onEnded={() => this.videoEndHandler()} className="show-page-video" src={this.props.movie.movieURL} autoPlay controls onMouseMove={this.handleMouse} />
                </div>
            </div>
        );
    } 
};

export default WatchMovie;