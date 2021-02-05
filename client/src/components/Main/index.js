import React from "react";

function Home() {

  document.title = 'Home - Salli Ala Nabi';

  return (
    <main className='home'>
      <section className="container">
        <h1>Home</h1>

        <h2>Login:</h2>
        <div className="login">
          <label forHtml="email">Email:</label>
          <br />
          <input type="text" placeholder="Enter your email address" name="email" required />
          <br />

          <label forHtml="password">Password:</label>
          <br />
          <input type="password" placeholder="Enter Password" name="password" autocomplete='current-password' required />
          <br />

          <label id='remember-id'>Remember me?</label>
          <input id='remember' type="checkbox" checked="checked" name="remember" />
          <button type="submit">Login</button>
          <br />
        </div>

        <h2>Don't have an account?</h2>
        <h3>Register now!</h3>
        <div className="register">
          <label forHtml="email">Email:</label>
          <br />
          <input type="text" placeholder="Enter your email address" name="email" required />
          <br />

          <label forHtml="password">Password:</label>
          <br />
          <input type="password" placeholder="Enter Password" name="password" autocomplete='new-password' required />
          <br />
          <button type="submit">Register</button>
        </div>
      </section>
    </main>
  )
};

export default Home;