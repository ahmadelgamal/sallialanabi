function Dashboard(props) {

  return (
    <div className='Dashboard'>
      <h1>Dashboard</h1>
      <p>Logged in status: { props.user }</p>
      <button onClick={ props.handleLogout }>Log Out</button>
    </div>
  );
};

export default Dashboard;
