import React from 'react'

class Signup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors()
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state);
        debugger
        this.props.processForm(user)
            .then(user => this.props.history.push('/browse'))
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="session-form">
                <form className="form" onSubmit={this.handleSubmit}>
                <h2 className="form-title">{this.props.formType}</h2>
                    <input className="input-email" placeholder="Email" type="text" value={this.state.email} onChange={this.update('email')} />
                    <input className="input-password" placeholder="Password" type="password" value={this.state.password} onChange={this.update('password')} />
                    <div className="errors">{this.renderErrors()}</div>
                    <button className="submit" type='submit' value={this.props.formType}>{this.props.formType}</button>
                    <div className="redirect-text">{this.props.link}</div>
                </form>
                </div>
        );
    }
};

export default Signup;