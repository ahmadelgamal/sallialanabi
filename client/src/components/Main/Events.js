import React from 'react';
import './main.css';

function Events() {

  document.title = 'Events - Salli Ala Nabi';

  return (
    <main className='events'>
      <section key="hero-events" id="hero-events" className="hero-images">
        <img
          src={ require(`../../assets/images/events.jpg`).default }
          alt="Quba' mosque, in outskirts of Medina, Saudi Arabia."
        />
      </section>

      <section className="container">
        <h1>Events</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>
      </section>
    </main>
  )
};

export default Events;
