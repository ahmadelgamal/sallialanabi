function Dashboard(props) {

  return (
    <main className='Dashboard'>
      <h1>Dashboard</h1>
      <p>Logged in status: { props.user }</p>
      <button onClick={ props.handleLogout }>Log Out</button>
    </main>
  );
};

export default Dashboard;
