import React from 'react';

class About extends React.Component {
  state = {}
  render() {
    return (
      <div className='about'>
        <h1>About the Developers</h1>
        <div className='tile'>
          <img src={'../Photos/annalise.jpg'} alt='Annalise Murphy' />
          <h2>Annalise Murphy</h2>
          <p>Annalise Murphy is a full stack software developer who loves to travel! When she's not out exploring, she's busy finding ways to make more money to keep that journey perpetually going.</p>
        </div>
        <div className='tile'>
          <img src={'../Photos/josh.jpeg'} alt='Josh Olloqui' />
          <h2>Josh Olloqui</h2>
          <p>Hello, I’m Josh Soft Engineer extraordinaire, aspiring podcaster, Portland outdoorsman, and owner of some adorable dogs. My curious mind always leads me to discovering, learning, and applying new information which enables me to create new designs and programs.</p>
        </div>
        <div className='tile'>
          <img src={'../Photos/patrick.jpg'} alt='Patrick Wilson' />
          <h2>Patrick Wilson</h2>
          <p>I am a full-stack web developer located in Portland, OR. I enjoy solving puzzles, trail running, and cycling. I look forward to using this app to get an intro into how algorithmic trading works.</p>
        </div>
        <div className='tile'>
          <img src={'../Photos/heather.jpg'} alt='Heather Peterson' />
          <h2>Heather Peterson</h2>
          <p>I am a full-stack developer and I'm inspired to create apps that make education easy and accessible for everyone. In my free time, I enjoy backpacking, rock climbing, and kayaking.</p>
        </div>
      </div>
    );
  }
}

export default About;