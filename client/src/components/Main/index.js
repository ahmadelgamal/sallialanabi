import React from "react";

function Home() {

  document.title = 'Home - Salli Ala Nabi';

  return (
    <main className='home'>
      <section key="hero-home" id="hero-home" className="hero-images">
        <img
          src={ require(`../../assets/images/home.jpg`).default }
          alt="The holy mosque, at Medina, Saudi Arabia."
        />
      </section>

      <section className="container">
        <h1>Home</h1>

        <h2>Welcome to Salli Ala Nabi</h2>
        <p><strong>Salli Ala Nabi</strong> is a modern and user-friendly resource on Islam. It provides basic information on rituals, resources and events.</p>

        <h2>Ramadan Tracker</h2>
        <p><strong>Ramadan Tracker</strong> is a free and smart form that helps you identify daily acts of worship in Ramadan and track your performance on each one.</p>
      </section>
    </main>
  )
};

export default Home;