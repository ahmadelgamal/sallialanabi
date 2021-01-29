import React from "react";
import './main.css';

function Home() {

  document.title =  'Home - Salli Ala Nabi';
  
  return (
    <main className='home'>
      <section className="container">
        <pre className="sulli">&#xFDFA;</pre>
        <h1 className="">Home</h1>
        <h2 className="">Welcome to Salli Ala Nabi</h2>
        <p>Salli Ala Nabi includes a Ramadan Tracker that helps you set targets and track your daily activities and acts of worship, in Ramadan, in order to do more good deeds, God willing.</p>
      </section>
    </main>
  )
};

export default Home;