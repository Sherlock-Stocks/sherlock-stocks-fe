import React from 'react';

class About extends React.Component {
  state = {}
  render() {
    return (
      <div className='about'>
        <h1>About the Developers</h1>
        <div className='tile'>
          <h2>Annalise Murphy</h2>
          <p></p>
        </div>
        <div className='tile'>
          <h2>Josh Olloqui</h2>
          <p></p>
        </div>
        <div className='tile'>
          <h2>Patrick Wilson</h2>
          <p></p>
        </div>
        <div className='tile'>
          <h2>Heather Peterson</h2>
          <p>I am a full-stack developer, and with this application, we've tried to make trading stocks easy and accessible for everyone. In my free time, I enjoy backpacking, rock climbing, and kayaking.</p>
        </div>
      </div>
    );
  }
}

export default About;