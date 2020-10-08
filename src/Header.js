import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  state = {}
  render() {
    return (
      <header>
        <div className='header'>
          <Link to='signup'>
            <h3>Signup</h3>
          </Link>
          <Link to='login'>
            <h3>Login</h3>
          </Link>
          <Link to='aboutus'>
            <h3>About Us</h3>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;