import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, loggedIn, ...rest }) {
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