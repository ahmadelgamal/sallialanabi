import { useState } from "react";
import { validateEmail } from '../../../utils/helpers';
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
          window.location = '/login';
        }
        else setLoginErrorMessage('Please check the email and password!');
      })
      .catch(err => console.error(err));
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

          fetch('/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData)
          })
            .then(response => {
              if (response.ok) {
                setRegisterErrorMessage('You have registered successfully!');
                setTimeout(() => setRegisterErrorMessage(''), 3000);
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

  return (
    <main className='home'>
      <section className="container">
        <h1>Salli Ala Nabi</h1>

        <h2>Login:</h2>
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
      </section>

      <section className="container registration">
        <h2>Don't have an account?</h2>
        <h3>Register now!</h3>
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
      </section>
    </main>
  )
};

export default Login;