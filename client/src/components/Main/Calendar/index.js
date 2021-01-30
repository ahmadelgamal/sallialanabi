import React from 'react';
import '../main.css';
// import { CalendarThData } from './CalendarThData';
// import { CalendarTdData } from './CalendarTdData';

function Calendar() {

  document.title = 'Calendar - Salli Ala Nabi';

  return (
    <main className='calendar'>
      <section key="hero-calendar" id="hero-calendar" className="hero-images">
        <img
          src={ require(`../../../assets/images/calendar.jpg`).default }
          alt="Quba' mosque, in outskirts of Medina, Saudi Arabia."
        />
      </section>

      {/* <section className="container">
        <table>
          <tr>
            { CalendarThData.map((item, index) => {
              return (
                <th>{ item.title }</th>
              );
            }) }
          </tr>
          { CalendarTdData.map((item, index) => {
            return (
              <tr>
                <td>{ item.title }</td>
              </tr>
            );
          }) }
        </table>
      </section> */}

      <section className="container">
        <h1>Islamic Calendar</h1>
        <h2>Major Events</h2>
        <h3>Fridays</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h3>Ramadan</h3>
        <h4>Sighting of the Crescent</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h4>First 10 Nights</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h4>Second 10 Nights</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h4>Last 10 Nights/Laylat Ul-Qadr</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h3>Eid Ul-Fitr</h3>
        <h4>Sighting of the Crescent</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h4>Eid Ul-Fitr</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h3>Hajj (Pilgrimage)</h3>
        <h4>First Nine Days of Thul-Hijjah</h4>
        <p>Lorem ipsum dolor sit amet, consectetur ad ipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h4>Arafa</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h3>Eid Ul-Adha</h3>
        <h4>Eid Ul-Adha</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h3>The Holy Months</h3>
        <h4>الأشهر الحُرُم</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>
      </section>

      <section className="container">
        <h2>Celebrated Events</h2>
        <h3>Al-Isra' wa Al-Mi'raj</h3>
        <p>Lorem ipsum dolor sit amet, consectetur ad ipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h3>Mid-Sha'ban</h3>
        <p>Lorem ipsum dolor sit amet, consectetur ad ipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h3>Battle of Badr</h3>
        <p>Lorem ipsum dolor sit amet, consectetur ad ipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h3>Fasting</h3>
        <h4>'ashuraa</h4>
        <p>Lorem ipsum dolor sit amet, consectetur ad ipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h3>Mawalid</h3>
        <h4>Birth of the Prophet Muhammad &#xFDFA;</h4>
        <p>Lorem ipsum dolor sit amet, consectetur ad ipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h3>Beginning of New Hijri Year</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>
      </section>

      <section className="container">
        <h2>Other Events</h2>
        <h3>Mawalid</h3>
        <h4>Birth of the Prophet Muhammad &#xFDFA;</h4>
        <p>Lorem ipsum dolor sit amet, consectetur ad ipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

        <h4>Arrival in Quba'</h4>
        <p>Lorem ipsum dolor sit amet, consectetur ad ipisicing elit. Nesciunt odit et itaque eum ducimus sunt voluptates facere quia nulla? Consectetur ipsam perspiciatis error cupiditate laudantium corrupti omnis sint reiciendis fuga!</p>

      </section>
    </main>
  )
};

export default Calendar;