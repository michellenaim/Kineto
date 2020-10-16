import React from 'react';

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    };

    handleDemoLogin(e) {
        e.preventDefault();
        const user = { email: "test@test.com", password: "password" }
        this.props.login(user)
            .then(user => this.props.history.push('/browse'))
    };

    render() {
        
        return (
            <div className="home">
                <div className="home-text">
                    <h1 className="welcome-h1">Unlimited movies and more.</h1>
                    <h3 className="welcome-h3">Watch anywhere anytime.</h3>
                    <p className="welcome-p">Log in using a demo user or sign in/sign up on the top right!</p>
                    <button className="demo-button" onClick={this.handleDemoLogin}>DEMO LOG IN</button>
                </div>
            </div>
        )
    }

}

export default Home;