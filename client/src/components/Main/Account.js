import React from 'react';
import './main.css';

function Account() {

  return (
    <main className='account'>
      <section key="hero-account" id="hero-account" className="hero-images">
        <img
          src={ require(`../../assets/images/account.jpg`).default }
          alt="View of Cairo skyline from Ahmad's home in Giza, Egypt."
        />
      </section>

      <section className="container">
        <h1>Account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>
      </section>
    </main>
  )
}

export default Account;
