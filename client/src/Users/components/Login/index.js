import { useState } from "react";
import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';

function Login() {

  document.title = 'Login - Salli Ala Nabi';

  // login form
  const [loginFormState, setLoginFormState] = useState(
    {
      loginEmail: '',
      loginPassword: '',
      loginRememberMe: false
    });
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  // update state based on login form input changes
  const handleLoginFormChange = (event) => {
    const { name, value } = event.target;

    setLoginFormState({
      ...loginFormState,
      [name]: value,
    });
  };

  // submit login form
  const handleLoginFormSubmit = (event) => {
    event.preventDefault();

    const { loginEmail, loginPassword, loginRememberMe } = loginFormState;

    // @TODO: add rememberMe to loginData
    const loginData = {
      email: loginEmail,
      password: loginPassword
    };

    // console.log(loginData);

    fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData)
    })
      .then(response => {
        if (response.ok) {
          setLoginErrorMessage('Login successful!');
          window.location = '/profile';
        }
        else setLoginErrorMessage('Please check the email and password!');
      })
      .catch(err => console.error(err));
  };

  return (
    <main className='login'>
      <section className="container">
        <h1>Login</h1>
        <form onSubmit={ handleLoginFormSubmit } className="login">
          <label forhtml="loginEmail">Email:</label>
          <br />
          <input
            onChange={ handleLoginFormChange }
            type="text"
            placeholder="Enter your email address"
            autoComplete='email'
            name="loginEmail"
            required
          />
          <br />

          <label forhtml="loginPassword">Password:</label>
          <br />
          <input
            onChange={ handleLoginFormChange }
            type="password"
            placeholder="Enter password"
            name="loginPassword"
            autoComplete='current-password'
            required
          />
          <br />

          <label id='remember-id'>Remember me?</label>
          <input
            onClick={ handleLoginFormChange }
            id='remember'
            type="checkbox"
            name="loginRememberMe"
            defaultChecked={ loginFormState.loginRememberMe }
          />
          <button type="submit">Login</button>
          <p className='errorMessages' id='loginErrorMessage'>
            { loginErrorMessage }
          </p>
        </form>
        <h3>Don't have an account? <Link to='register'>Register now!</Link></h3>
      </section>
    </main>
  )
};

export default Login;