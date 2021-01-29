import React from "react";
import './main.css';

function Home() {

  document.title = 'Home - Salli Ala Nabi';

  return (
    <main className='home'>
      <section key="hero-home" id="hero-home" className="hero-images">
        <img
          src={ require(`../../assets/images/home.jpg`).default }
          alt="View of Cairo skyline from Ahmad's home in Giza, Egypt."
        />
      </section>

      <section className="container">
        <h1 className="">Home</h1>
        <h2 className="">Welcome to Salli Ala Nabi</h2>
        <p>Currently, <strong>Salli Ala Nabi</strong> is a Ramadan Tracker that helps you set targets and track your daily activities and acts of worship, in Ramadan, in order to do more good deeds, God willing.</p>
      </section>
    </main>
  )
};

export default Home;