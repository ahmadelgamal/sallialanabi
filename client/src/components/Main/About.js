import React from 'react';
import './main.css';

function About() {

  document.title = 'About - Salli Ala Nabi';

  return (
    <main className='about'>
      <section key="hero-about" id="hero-about" className="hero-images">
        <img
          src={ require(`../../assets/images/about.jpg`).default }
          alt="The Great Mosque, in Kufa, Iraq."
        />
      </section>

      <section className="container">
        <h1>About</h1>
        <p>Salli Ala Nabi includes a Ramadan Tracker that helps you set targets and track your daily activities and acts of worship, in Ramadan, in order to do more good deeds, God willing.</p>
      </section>
    </main>
  )
};

export default About;
