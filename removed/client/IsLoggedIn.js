import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../client/src/redux/ducks/isLoggedIn';

const IsLoggedIn = () => {
  const loggedIn = useSelector(state => state.isLoggedIn.loggedIn);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <h1>IsLoggedIn</h1>
  )
};

export default IsLoggedIn;