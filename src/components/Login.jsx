import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
  const [login, setLogin] = React.useState(false);
  return (
    <NavLink exact to="/screen">
      <button type="button" onClick={() => setLogin(!login)}>Login</button>
    </NavLink>
  );
}

export default Login;
