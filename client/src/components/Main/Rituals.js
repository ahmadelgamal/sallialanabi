import React from 'react';
import './main.css';

function Rituals() {

  document.title = 'Rituals - Salli Ala Nabi';

  return (
    <main className='Rituals'>
      <section key="hero-Rituals" id="hero-Rituals" className="hero-images">
        <img
          src={ require(`../../assets/images/rituals.jpg`).default }
          alt="Holy Ka'ba, in Mecca, Saudi Arabia."
        />
      </section>

      <section className="container">
        <h1>Rituals</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>
      </section>
    </main>
  )
}

export default Rituals;
