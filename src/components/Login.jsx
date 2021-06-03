import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
  const [login, setLogin] = React.useState(false);
  function BtnLog() {
    setLogin(!login);
  }
  return (
    <NavLink exact to="/screen">
      <button type="button" onClick={BtnLog}>Login</button>
    </NavLink>
  );
}

export default Login;
