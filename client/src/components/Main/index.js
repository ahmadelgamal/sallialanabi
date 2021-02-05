import React from "react";

function Home() {

  document.title = 'Home - Salli Ala Nabi';

  async function registerHandler(event) {
    event.preventDefault();

    const email = document.querySelector("#register-email").value.trim();
    console.log(email);
    const password = document.querySelector("#register-password").value.trim();
    console.log(password);
    const confirmPassword = document.querySelector('#register-confirm-password').value.trim();
    console.log(confirmPassword);
    let response = [];

    if (password.length < 8) {
      document.querySelector('#register-error-message').innerHTML = 'Password must be at least 8 characters long';

    } else if (password !== confirmPassword) {
      document.querySelector('#register-error-message').innerHTML = 'Password does not match';

    } else if (email && password) {

      response = await fetch("/api/users", {
        method: "post",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);

      // check the response status
      if (response.ok) {
        document.querySelector('#register-error-message').innerHTML = 'You have successfully signed up';
        // document.location.replace("/");
      } else {
        document.querySelector('#register-error-message').innerHTML = 'User already exists.';
      }

    } else {
      document.querySelector('#register-error-message').innerHTML = 'Please fill all fields.';
    }
  }

  return (
    <main className='home'>
      <section className="container">
        <h1>Home</h1>

        <h2>Login:</h2>
        <form className="login">
          <label forhtml="email">Email:</label>
          <br />
          <input type="text" placeholder="Enter your email address" autoComplete='email' name="email" required />
          <br />

          <label forhtml="password">Password:</label>
          <br />
          <input type="password" placeholder="Enter password" name="password" autoComplete='current-password' required />
          <br />

          <label id='remember-id'>Remember me?</label>
          <input id='remember' type="checkbox" name="remember" />
          <button type="submit">Login</button>
          <br />
        </form>

        <h2>Don't have an account?</h2>
        <h3>Register now!</h3>
        <form className="register">
          <label forhtml="email">Email:</label>
          <br />
          <input id='register-email' type="text" placeholder="Enter your email address" name="email" autoComplete='email' required />
          <br />

          <label forhtml="password">Password:</label>
          <br />
          <input id='register-password' type="password" placeholder="Enter password" name="password" autoComplete='new-password' required />
          <br />

          <label forhtml="confirm-password">Confirm Password:</label>
          <br />
          <input id='register-confirm-password' type="password" placeholder="Enter password again" name="confirm-password" autoComplete='new-password' required />
          <br />
          <button id='register-btn' type="submit" onSubmit={ registerHandler }>Register</button>

          <p id='register-error-message'></p>
        </form>
      </section>
    </main>
  )
};

export default Home;