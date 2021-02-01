import React from 'react';

function Ramadan() {

  document.title = 'Ramadan - Salli Ala Nabi';

  return (
    <main
      className='ramadan'>
      <section key="hero-ramadan" id="hero-ramadan" className="hero-images">
        <img
          src={ require(`../../../assets/images/ramadan.jpg`).default }
          alt="A plate of dates and a lantern on a table-top."
        />
      </section>

      <section className="container">
        <h1>Ramadan</h1>
        <p>Salli Ala Nabi includes a Ramadan Tracker that helps you set targets and track your daily activities and acts of worship, in Ramadan, in order to do more good deeds, God willing.</p>
      </section>
    </main>
  )
};

export default Ramadan;
