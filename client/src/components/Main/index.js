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

        <h2>What is Salli Ala Nabi?</h2>
        <p><strong>Salli Ala Nabi</strong> is a modern and user-friendly progressive web application (PWA) that helps you:</p>
        <ol>
          <li>Set goals for daily acts of worship in Ramadan.</li>
          <li>Record your activities.</li>
          <li>Track your performance on each one.</li>
          <li>Create or join a support group.</li>
        </ol>

        <h5>Resgister/Login</h5>
        <p></p>
      </section>
    </main>
  )
};

export default Home;