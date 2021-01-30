import React from 'react';
import './main.css';

function Ramadan() {

  document.title = 'Ramadan - Salli Ala Nabi';

  return (
    <main className='ramadan'>
      <section key="hero-ramadan" id="hero-ramadan" className="hero-images">
        <img
          src={ require(`../../assets/images/ramadan.jpg`).default }
          alt="A lantern and a plate of dates on a table-top."
        />
      </section>

      <section className="container">
        <h1>Ramadan</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>
      </section>
    </main>
  )
}

export default Ramadan;
