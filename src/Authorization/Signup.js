import React from 'react';
import { signUp } from '../sherlock-api.js';

class Signup extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleSignUp = async (e) => {
    e.preventDefault();

    await signUp({
      email: this.state.email,
      password: this.state.password
    });

    this.props.history.push('/portfolio')
  }
  render() {
    return (
      <div className='form'>
        <h2 className='form-title'>Signup</h2>
        <form onSubmit={this.handleSignUp}>
          <label>
            <h3>Email</h3>
            <input type='email' autoComplete='username' onChange={e => this.setState({ email: e.target.value })} value={this.state.email} required />
          </label>
          <label>
            <h3>Password</h3>
            <input type='password' autoComplete='current-password' onChange={e => this.setState({ password: e.target.value })} value={this.state.password} required />
          </label>
          <div>
            <button>Signup</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;