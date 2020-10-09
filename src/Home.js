import React from 'react';
import './App.css';

class Home extends React.Component {
  state = {}
  render() {
    return (
      <div className='home'>
        <h1 className='title'>Sherlock Stocks</h1>
        <p>
          We find the money.
        </p>
      </div>
    );
  }
}

export default Home;