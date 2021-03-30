import React, { useState } from 'react'

function Admin() {

  document.title = 'Admin - Salli Ala Nabi';

  // const handleReadAllUsers = (event) => {
  //   event.preventDefault();

  //   const { loginEmail, loginPassword, loginRememberMe } = loginFormState;

  //   // @TODO: add rememberMe to loginData
  //   const loginData = {
  //     email: loginEmail,
  //     password: loginPassword
  //   };

  //   // console.log(loginData);

  //   fetch('/api/users/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(loginData)
  //   })
  //     .then(response => {
  //       if (response.ok) setLoginErrorMessage('Login successful!');
  //       else setLoginErrorMessage('Please check the email and password!');
  //     })
  //     .catch(err => console.error(err));
  // };

  return (
    <main className='admin'>
      <section className='container'>
        <h1>Admin</h1>
        <h2>Users</h2>
        <ul>
          <li>Create User</li>
          <li>Read all Users</li>
          <li>Read User by Id</li>
          <li>Update User by Id</li>
          <li>Delete User by Id</li>
        </ul>
      </section>
    </main>
  )
}

export default Admin;