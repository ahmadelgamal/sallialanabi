function About() {

  document.title = 'About - Salli Ala Nabi';

  return (
    <main className='about'>
      <section className="container">
        <h1>About</h1>

        <h2>What is Salli Ala Nabi?</h2>

        <h3>Reminder</h3>
        <p>First, we are honored and humbled to constantly remind you to send prayers and peace upon the Prophet Muhammad and his family.</p>

        <h3>Ramadan</h3>
        <p>Second, this is a modern and user-friendly PWA (Progressive Web Application) that helps you:</p>
        <ol>
          <li>Set goals for daily acts of worship in Ramadan.</li>
          <li>Record your activities.</li>
          <li>Track your performance on each one.</li>
          <li>Create or join a support group.</li>
        </ol>
      </section>
    </main>
  )
};

export default About;
