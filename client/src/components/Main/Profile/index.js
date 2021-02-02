import React from 'react';

function Profile() {

  document.title = 'Profile - Salli Ala Nabi';

  return (
    <main className='profile'>
      <section key="hero-profile" id="hero-profile" className="hero-images">
        <img
          src={ require(`../../../assets/images/profile.jpg`).default }
          alt="The Blue Mosque, in Istanbul, Turkey."
        />
      </section>

      <section className="container">
        <h1>Profile</h1>
        <h2>Required Information:</h2>
        <h3>Email: <span>ahmadelgamal@gmail.com</span></h3>
        <div className="btn-container">
          <button>Change Email</button>
          <button>Change Password</button>
          <button>Delete Account</button>
        </div>

        <h2>Optional Details:</h2>

        <table>
          <tbody>
            <tr>
              <th>First Name:</th>
              <td>Ahmad</td>
              <td><button>Edit</button></td>
            </tr>
            <tr>
              <th>Last Name:</th>
              <td>El Gamal</td>
              <td><button>Edit</button></td>
            </tr>
            <tr>
              <th>Gender:</th>
              <td>Male</td>
              <td><button>Edit</button></td>
            </tr>
            <tr>
              <th>Date of Birth:</th>
              <td>08 July 1978</td>
              <td><button>Edit</button></td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
};

export default Profile;
