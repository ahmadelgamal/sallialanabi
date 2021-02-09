import React from 'react';
import { NavLink } from 'react-router-dom';

function Error_404() {

  document.title = 'Error_404 - Salli Ala Nabi';

  return (
    <main className='error_404'>
      <section className="container">
        <h1>Error-404</h1>
        <h4 className="mt-20">You have requested a page that does not exist.</h4>
        <p className="mt-20">Please check the url (web address in the browser search bar above) or <NavLink to="/" exact>click here to go back to the home page.</NavLink></p>
      </section>
    </main>
  )
};

export default Error_404;
