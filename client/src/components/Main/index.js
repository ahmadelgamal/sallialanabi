import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
// import Auth from '../../utils/auth';

function Home() {

  document.title = 'Home - Salli Ala Nabi';

  // login form
  const [loginFormState, setLoginFormState] = useState({ loginEmail: '', loginPassword: '', loginRememberMe: false });
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  // update state based on login form input changes
  const handleLoginFormChange = (event) => {
    const { name, value } = event.target;

    setLoginFormState({
      ...loginFormState,
      [name]: value,
    });

    console.log(name, value);
  };

  // submit login form
  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();

    const { email, password, rememberMe } = loginFormState;

    console.log(loginFormState);
    console.log(email);
    console.log(password);
    console.log(rememberMe);

    setLoginErrorMessage('Ok');

    // if username is not found
    //   setLoginErrorMessage('Username not found');

    // if password is incorrect
    //   setLoginErrorMessage('Please check your password');
  };

  // register form
  const [registerFormState, setRegisterFormState] = useState({ email: '', password: '', confirmPassword: '' });
  const [registerErrorMessage, setRegisterErrorMessage] = useState('');

  // update state based on register form input changes
  const handleRegisterFormChange = (event) => {
    const { name, value } = event.target;

    setRegisterFormState({
      ...registerFormState,
      [name]: value,
    });
  };

  // submit register form
  const handleRegisterFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { email, password, confirmPassword } = registerFormState;

      const emailIsValid = await validateEmail(email);

      if (!emailIsValid) {
        setRegisterErrorMessage('Please enter a valid email address');
      } else {
        if (password.length < 8) {
          setRegisterErrorMessage('Password must be at least 8 characters long');

        } else if (password !== confirmPassword) {
          setRegisterErrorMessage('Passwords do not match');

        } else {

          const registerData = {
            email: email,
            password: password
          };

          fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData)
          })
            .then(response => {
              if (response.ok) setRegisterErrorMessage('You have registered successfully!');
              else setRegisterErrorMessage('User already exists!');
            })
            .catch(err => console.error(err));
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  // async function registerHandler(event) {
  //   event.preventDefault();

  //   const email = document.querySelector("#register-email").value.trim();
  //   console.log(email);
  //   const password = document.querySelector("#register-password").value.trim();
  //   console.log(password);
  //   const confirmPassword = document.querySelector('#register-confirm-password').value.trim();
  //   console.log(confirmPassword);
  //   let response = [];

  //   if (password.length < 8) {
  //     document.querySelector('#register-error-message').innerHTML = 'Password must be at least 8 characters long';

  //   } else if (password !== confirmPassword) {
  //     document.querySelector('#register-error-message').innerHTML = 'Password does not match';

  //   } else if (email && password) {

  //     response = await fetch("/api/users", {
  //       method: "post",
  //       body: JSON.stringify({
  //         email,
  //         password,
  //       }),
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     console.log(response);

  //     // check the response status
  //     if (response.ok) {
  //       document.querySelector('#register-error-message').innerHTML = 'You have successfully signed up';
  //       // document.location.replace("/");
  //     } else {
  //       document.querySelector('#register-error-message').innerHTML = 'User already exists.';
  //     }

  //   } else {
  //     document.querySelector('#register-error-message').innerHTML = 'Please fill all fields.';
  //   }
  // }

  return (
    <main className='home'>
      <section className="container">
        <h1>Home</h1>

        <h2>Login:</h2>
        <form onSubmit={ handleLoginFormSubmit } className="login">
          <label forhtml="loginEmail">Email:</label>
          <br />
          <input onChange={ handleLoginFormChange } type="text" placeholder="Enter your email address" autoComplete='email' name="loginEmail" required />
          <br />

          <label forhtml="loginPassword">Password:</label>
          <br />
          <input onChange={ handleLoginFormChange } type="password" placeholder="Enter password" name="loginPassword" autoComplete='current-password' required />
          <br />

          <label id='remember-id'>Remember me?</label>
          <input onClick={ handleLoginFormChange } id='remember' type="checkbox" name="loginRememberMe" defaultChecked={ loginFormState.loginRememberMe } />
          <button type="submit">Login</button>
          <br />
          <p className='errorMessages' id='loginErrorMessage'>{ loginErrorMessage }</p>
        </form>

        <h2>Don't have an account?</h2>
        <h3>Register now!</h3>
        <form onSubmit={ handleRegisterFormSubmit } className="register">
          <label forhtml="email">Email:</label>
          <br />
          <input onChange={ handleRegisterFormChange } id='registerEmail' type="text" placeholder="Enter your email address" name="email" autoComplete='email' required />
          <br />

          <label forhtml="password">Password:</label>
          <br />
          <input onChange={ handleRegisterFormChange } id='registerPassword' type="password" placeholder="Enter password" name="password" autoComplete='new-password' required />
          <br />

          <label forhtml="confirm-password">Confirm Password:</label>
          <br />
          <input onChange={ handleRegisterFormChange } id='registerConfirmPassword' type="password" placeholder="Enter password again" name="confirmPassword" autoComplete='new-password' required />
          <br />
          <button id='registerBtn' type="submit" >Register</button>

          <p className='errorMessages' id='registerErrorMessage'>{ registerErrorMessage }</p>
        </form>
      </section>
    </main>
  )
};

export default Home;