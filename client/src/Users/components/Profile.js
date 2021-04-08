function Profile() {
  document.title = 'Profile - Salli Ala Nabi';

  return (
    <main className='profile'>
      <section className="container">
        <h1>Profile</h1>
        <h2>Required Information:</h2>
        <h5 className='scroll'>Email: <span>muhammadabdallah@gmail.com</span></h5>
        <div className="btn-container">
          <button>Change Email</button>
          <button>Change Password</button>
          <button>Delete Account</button>
        </div>
      </section>

      <section className='container'>
        <h2>Optional Details:</h2>
        <div className='scroll'>
          <table>
            <tbody>
              <tr>
                <th>First Name:</th>
                <td>Muhammad</td>
                <td><button>Edit</button></td>
              </tr>
              <tr>
                <th>Last Name:</th>
                <td>Abdallah</td>
                <td><button>Edit</button></td>
              </tr>
              <tr>
                <th>Gender:</th>
                <td>Male</td>
                <td><button>Edit</button></td>
              </tr>
              <tr>
                <th>Date of Birth:</th>
                <td>20 August 1980</td>
                <td><button>Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
};

export default Profile;
