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
        this.props.processForm(user)
            .then(user => this.props.history.push('/'))
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
                    <label>Email:
                        <input className= "input-email" type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <label>Password:
                        <input className="input-password" type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    {this.renderErrors()}
                    <button className="submit" type='submit' value={this.props.formType}>{this.props.formType}</button>
                </form>
                </div>
        );
    }
};

export default Signup;