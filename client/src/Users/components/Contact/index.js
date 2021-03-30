import { useState, useEffect } from 'react';
import { validateEmail } from '../../../utils/helpers';
import emailjs from 'emailjs-com';

function Contact() {

  document.title = 'Contact - Salli Ala Nabi';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [errorMessage, setErrorMessage] = useState('');

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  function handleChange(event) {
    if (event.target.name === 'email') {
      const validEmail = validateEmail(event.target.value);
      // console.log('isValid: ', validEmail);
      if (!validEmail) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value })
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    let validName = false;
    let validEmail = false;
    let validMessage = false;

    if (event.target.querySelector("input[name='name'").value.trim() === "") setErrorMessage('Please type your full name');
    else validName = true;

    if (event.target.querySelector("input[name='email'").value.trim() === "") setErrorMessage('Please type your email address');
    else validEmail = true;

    if (event.target.querySelector("textarea[name='message'").value.trim() === "") setErrorMessage('Please type your message');
    else validMessage = true;

    if (validName && validEmail && validMessage) {
      emailjs.sendForm(process.env.REACT_APP_EJSserviceId, process.env.REACT_APP_EJStemplateID, event.target, process.env.REACT_APP_EJSuserID)
        .then((result) => {
        }, (error) => {
          console.log(error.text);
        })
        .then(() => {
          setErrorMessage('Message sent successfully!');
          setTimeout(() => setErrorMessage(''), 3000);
        })
        .then(() => {
          event.target.querySelector("input[name='name'").value = "";
          event.target.querySelector("input[name='email'").value = "";
          event.target.querySelector("textarea[name='message'").value = "";
        });
    }
  }

  return (
    <main className="contacts">
      <section className="container">
        <h1>Contact Us</h1>
        <form id="contact-form" onSubmit={ handleSubmit }>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" placeholder="Please type your full name here" defaultValue={ name } onBlur={ handleChange } />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" autoComplete="email" className="validate" placeholder="Please type your email address here" defaultValue={ email } onBlur={ handleChange } />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message-input" type="text" name="message" rows="7" placeholder="Please type your message here" defaultValue={ message } onBlur={ handleChange } />
          </div>
          <button id="contact-submit" type="submit" value="send">Submit</button>
          { errorMessage && (
            <div>
              <p id="contact-form-error-message">{ errorMessage }</p>
            </div>
          ) }
        </form>
      </section>
    </main>
  )
};

export default Contact;