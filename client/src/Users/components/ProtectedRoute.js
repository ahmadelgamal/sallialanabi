import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ component: Component, ...rest }) {
  const loggedIn = useSelector((state) => state.isLoggedIn.loggedIn);

  return (
    <Route { ...rest } render={
      props => {
        if (loggedIn) {
          return <Component { ...rest } { ...props } />
        }
        else {
          return <Redirect to={
            {
              pathname: '/login',
              state: { from: props.location }
            }
          } />
        }
      }
    }
    />
  )
};

export default ProtectedRoute;