import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ component: Component, ...rest }) {
  const loggedIn = useSelector((state) => state.isLoggedIn.loggedIn);

  return (
    <Route { ...rest } render={ () => {
      if (loggedIn) return <Component { ...rest } />
      else return <Redirect to='/login' />
    }
    }
    />
  )
};

export default ProtectedRoute;