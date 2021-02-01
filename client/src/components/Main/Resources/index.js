import React from 'react'

function Resources() {

  document.title = 'Resources - Salli Ala Nabi';

  return (
    <main className='resources'>
      <section key="hero-resources" id="hero-resources" className="hero-images">
        <img
          src={ require(`../../../assets/images/resources.jpg`).default }
          alt="Al-Aqsa mosque, in Jerusalem, (occupied) Palestine."
        />
      </section>

      <section className="container">
        <h1>Resources</h1>
        <h2>Quran</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>
        
        <h2>Sunnah</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>
        
        <h2>Concensus</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>
        
        <h2>Comparison</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h2 className='rtl align-left'>الاستصحاب (الشافعية) / الاستحسان (الحنفية) / المصلحة (المالكية والحنابلة)</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>
      </section>
    </main>
  )
};

export default Resources
