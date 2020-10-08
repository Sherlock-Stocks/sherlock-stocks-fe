import React from 'react';
import { login } from '../sherlock-api';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleLogin = async(e) => {
    e.preventDefault();

    try {
      await login({
        email: this.state.email,
        password: this.state.password
      })
    } catch (e) {
      res.status(500).json({ error: e.message });
    }

    this.props.history.push('/portfolio')
  }
  render() { 
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <label>
            <h3>Email</h3>
            <input type='email' autoComplete='username' onChange={e => this.setState({ email: e.target.value })} value={this.state.email} required/>
          </label>
          <label>
            <h3>Password</h3>
            <input type='password' autoComplete='current-password' onChange={e => this.setState({ password: e.target.value })} value={this.state.password} required/>
          </label>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    );
  }
}
 
export default Login;