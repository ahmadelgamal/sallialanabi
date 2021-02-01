import React from 'react';

function Account() {

  document.title = 'Account - Salli Ala Nabi';

  return (
    <main className='account'>
      <section key="hero-account" id="hero-account" className="hero-images">
        <img
          src={ require(`../../../assets/images/account.jpg`).default }
          alt="The Blue Mosque, in Istanbul, Turkey."
        />
      </section>

      <section className="container">
        <h1>Account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>
      </section>
    </main>
  )
};

export default Account;
