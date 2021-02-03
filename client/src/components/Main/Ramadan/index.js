import React from 'react';

function Ramadan() {

  document.title = 'Ramadan - Salli Ala Nabi';

  return (
    <main className='ramadan'>
      <section key="hero-ramadan" id="hero-ramadan" className="hero-images">
        <img
          src={ require(`../../../assets/images/ramadan.jpg`).default }
          alt="A plate of dates and a lantern on a table-top."
        />
      </section>

      <section className="container">
        <h1>Ramadan 1442</h1>
        <p>Salli Ala Nabi includes a Ramadan Tracker that helps you set targets and track your daily activities and acts of worship, in Ramadan, in order to do more good deeds, God willing.</p>
      </section>

      <section className='container'>
        <h2>List of suggested daily worship activities</h2>
        <div className='flex'>
          <article>
            <h3>Daily Prayers (<i> Salat </i>)</h3>
            <div className='flex'>

              <div className='prayer'>
                <label htmlFor="maghrib">Maghrib</label>
                <div className='flex-row prayer-checkboxes'>
                  <input type="checkbox" id="maghrib" name="maghrib" value="maghrib" />
                  <input type="checkbox" id="maghrib" name="maghrib" value="maghrib" />
                  <input type="checkbox" id="maghrib" name="maghrib" value="maghrib" />
                </div>
              </div>

              <div className='prayer'>
                <label htmlFor="ishaa">Ishaa</label>
                <div className='flex-row'>
                  <input type="checkbox" id="ishaa" name="ishaa" value="ishaa" />
                  <input type="checkbox" id="ishaa" name="ishaa" value="ishaa" />
                  <input type="checkbox" id="ishaa" name="ishaa" value="ishaa" />
                </div>
              </div>

              <div className='prayer'>
                <label htmlFor="fajr">Fajr</label>
                <div className='flex-row'>
                  <input type="checkbox" id="fajr" name="fajr" value="fajr" />
                  <input type="checkbox" id="fajr" name="fajr" value="fajr" />
                  <input type="checkbox" id="fajr" name="fajr" value="fajr" />
                </div>
              </div>

              <div className='prayer'>
                <label htmlFor="zhuhr">Zhuhr</label>
                <div className='flex-row'>
                  <input type="checkbox" id="zhuhr" name="zhuhr" value="zhuhr" />
                  <input type="checkbox" id="zhuhr" name="zhuhr" value="zhuhr" />
                  <input type="checkbox" id="zhuhr" name="zhuhr" value="zhuhr" />
                </div>
              </div>

              <div className='prayer'>
                <label htmlFor="assr">Assr</label>
                <div className='flex-row'>
                  <input type="checkbox" id="assr" name="assr" value="assr" />
                  <input type="checkbox" id="assr" name="assr" value="assr" />
                  <input type="checkbox" id="assr" name="assr" value="assr" />
                </div>
              </div>
            </div>
          </article>

          <article>
            <h3>After-Prayer Remembrance (<i> Thikr </i>)</h3>
            <div className='flex'>
              <div>
                <input type="checkbox" id="maghrib" name="maghrib" value="maghrib" />
                <label htmlFor="maghrib">Maghrib</label>
              </div>

              <div>
                <input type="checkbox" id="ishaa" name="ishaa" value="ishaa" />
                <label htmlFor="ishaa">Ishaa</label>
              </div>

              <div>
                <input type="checkbox" id="fajr" name="fajr" value="fajr" />
                <label htmlFor="fajr">Fajr</label>
              </div>

              <div>
                <input type="checkbox" id="zhuhr" name="zhuhr" value="zhuhr" />
                <label htmlFor="zhuhr">Zhuhr</label>
              </div>

              <div>
                <input type="checkbox" id="assr" name="assr" value="assr" />
                <label htmlFor="assr">Assr</label>
              </div>
            </div>
          </article>

          <article>
            <h3>Fasting (<i> Sawm </i>)</h3>
            <div className='flex-row'>
              <div>
                <label htmlFor="maghrib"><i>Sohour</i> just before Fajr</label>
                <br />
                <input type="checkbox" id="maghrib" name="maghrib" value="maghrib" />
              </div>

              <div>
                <label htmlFor="ishaa">Complete Fasting</label>
                <br />
                <input type="checkbox" id="ishaa" name="ishaa" value="ishaa" />
              </div>

              <div>
                <label htmlFor="fajr"><i>Iftar</i> promptly after Maghrib</label>
                <br />
                <input type="checkbox" id="fajr" name="fajr" value="fajr" />
              </div>
            </div>
          </article>

          <article>
            <h3>Night Prayer (<i> Qiyam </i>)</h3>
            <div className='flex-row'>
              <div>
                <input type="checkbox" id="maghrib" name="maghrib" value="maghrib" />
                <br />
                <label htmlFor="maghrib">Number of <i>raka'at</i>:</label>
              </div>

              <div>
                <input type="checkbox" id="ishaa" name="ishaa" value="ishaa" />
                <br />
                <label htmlFor="ishaa"><i>Juz' #:</i></label>
              </div>

              <div>
                <input type="checkbox" id="fajr" name="fajr" value="fajr" />
                <br />
                <label htmlFor="fajr">From <i>Surah</i>:___ Verse:___ to Surah:___ Verse:___</label>
              </div>
            </div>
          </article>

          <article>
            <h3>Quran Recitation</h3>
            <div className='flex-row'>
              <div>
                <input type="checkbox" id="ishaa" name="ishaa" value="ishaa" />
                <br />
                <label htmlFor="ishaa"><i>Juz' #:</i></label>
              </div>

              <div>
                <input type="checkbox" id="fajr" name="fajr" value="fajr" />
                <br />
                <label htmlFor="fajr">From <i>Surah</i>:___ Verse:___ to Surah:___ Verse:___</label>
              </div>
            </div>
          </article>

          <article>
            <h3><i>Witr</i> Prayer</h3>
            <div className='flex-row'>
              <div>
                <input type="checkbox" id="maghrib" name="maghrib" value="maghrib" />
                <br />
                <label htmlFor="maghrib">1 <i>Rak'a</i>:</label>
              </div>

              <div>
                <input type="checkbox" id="ishaa" name="ishaa" value="ishaa" />
                <br />
                <label htmlFor="ishaa"><i>3 <i>Raka'at</i></i></label>
              </div>

              <div>
                <input type="checkbox" id="fajr" name="fajr" value="fajr" />
                <br />
                <label htmlFor="fajr">More</label>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
};

export default Ramadan;
