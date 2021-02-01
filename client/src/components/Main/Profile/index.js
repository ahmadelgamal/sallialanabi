import React from 'react';

function Profile() {

  document.title = 'Profile - Salli Ala Nabi';

  return (
    <main className='profile'>
      <section key="hero-profile" id="hero-profile" className="hero-images">
        <img
          src={ require(`../../../assets/images/profile.jpg`).default }
          alt="The Blue Mosque, in Istanbul, Turkey."
        />
      </section>

      <section className="container">
        <h1>Profile</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>
      </section>
    </main>
  )
};

export default Profile;
