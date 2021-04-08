function Dashboard({ props }) {
  return (
    <main className='dashboard'>
      <div className="container">
        <h1>Dashboard</h1>
        <p>Logged in status: { props.loggedIn }</p>
        <button onClick={ props.handleLogout }>Log Out</button>
      </div>
    </main>
  );
};

export default Dashboard;
