import { useState } from "react";
import { Redirect, NavLink } from 'react-router-dom';
import { validateEmail } from '../../utils/helpers';
// import Auth from '../../utils/auth';
import React from "react";

function Register() {

  document.title = 'Register - Salli Ala Nabi';

  const [registerStatus, setRegisterStatus] = useState(false);

  // register form
  const [registerFormState, setRegisterFormState] = useState(
    {
      email: '',
      password: '',
      confirmPassword: ''
    });
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

          fetch('/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData)
          })
            .then(response => {
              if (response.ok) {
                setRegisterErrorMessage('You have registered successfully!');
                setTimeout(() => {
                  setRegisterErrorMessage('');
                  setRegisterStatus(true);
                }, 1000);
              }
              else setRegisterErrorMessage('User already exists!');
            })
            .catch(err => console.error(err));
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (registerStatus) return <Redirect to='/login' />;
  else return (
    <main className='register'>
      <section className="container">
        <h1>Register</h1>
        <form onSubmit={ handleRegisterFormSubmit } className="register">
          <label forhtml="email">Email:</label>
          <br />
          <input
            onChange={ handleRegisterFormChange }
            id='registerEmail'
            type="text"
            placeholder="Enter your email address"
            name="email"
            autoComplete='email'
            required
          />
          <br />

          <label forhtml="password">Password:</label>
          <br />
          <input
            onChange={ handleRegisterFormChange }
            id='registerPassword'
            type="password"
            placeholder="Enter password"
            name="password"
            autoComplete='new-password'
            required
          />
          <br />

          <label forhtml="confirm-password">Confirm Password:</label>
          <br />
          <input
            onChange={ handleRegisterFormChange }
            id='registerConfirmPassword'
            type="password"
            placeholder="Enter password again"
            name="confirmPassword"
            autoComplete='new-password'
            required
          />
          <br />
          <button id='registerBtn' type="submit" >Register</button>

          <p className='errorMessages' id='registerErrorMessage'>
            { registerErrorMessage }
          </p>
        </form>
        <h3>Already have an account? <NavLink to='/login'>Login</NavLink></h3>
      </section>
    </main>
  )
};

export default Register;