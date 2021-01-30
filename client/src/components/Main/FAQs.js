import React from 'react';
import './main.css';

function FAQs() {

  document.title = 'FAQs - Salli Ala Nabi';

  return (
    <main className='faqs'>
      <section key="hero-faqs" id="hero-faqs" className="hero-images">
        <img
          src={ require(`../../assets/images/faqs.jpg`).default }
          alt="Al-Azhar Mosque, in Cairo, Egypt."
        />
      </section>

      <section className="container">
        <h1>FAQs</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>
      </section>
    </main>
  )
};

export default FAQs;
