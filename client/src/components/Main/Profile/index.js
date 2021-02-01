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
        <h3 className="mt-20">Email: <span className="black-text">ahmadelgamal@gmail.com</span></h3>
        <div className="flex">
          <button className="btn d-orange-d4 mt-20">Change Email</button>
          <button className="btn l-green-d4 mt-20">Change Password</button>
          <button className="btn d-orange-d4 mt-20">Delete Account</button>
        </div>

        <h2>Optional Details:</h2>

        <table className='mt-20'>
          <tr>
            <th>First Name:</th>
            <td>Ahmad</td>
            <td className="d-orange-d4"><button className='blue-grey-l5-text'>Edit</button></td>
          </tr>
          <tr>
            <th>Last Name:</th>
            <td>El Gamal</td>
            <td className="d-orange-d4"><button className='blue-grey-l5-text'>Edit</button></td>
          </tr>
          <tr>
            <th>Gender:</th>
            <td>Male</td>
            <td className="d-orange-d4"><button className='blue-grey-l5-text'>Edit</button></td>
          </tr>
          <tr>
            <th>Date of Birth:</th>
            <td>08 July 1978</td>
            <td className="d-orange-d4"><button className='blue-grey-l5-text'>Edit</button></td>
          </tr>
        </table>
      </section>
    </main>
  )
};

export default Profile;
