import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username = '',
            password = ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewUser(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type='text' name='username' onChange={this.handleChange} value={this.state.username} />
                    <label>Password</label>
                    <input type='text' name='password' onChange={this.handleChange} value={this.state.password} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;