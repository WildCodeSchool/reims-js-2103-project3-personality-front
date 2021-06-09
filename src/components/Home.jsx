import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  const [login, setLogin] = React.useState(false);
  const [signin, setSignin] = React.useState(false);
  return (
    <>
      <NavLink exact to="/screen">
        <button type="button" onClick={() => setLogin(!login)}>Login</button>
      </NavLink>
      <NavLink exact to="/register">
        <button type="button" onClick={() => setSignin(!signin)}>Signin</button>
      </NavLink>
    </>
  );
}

export default Home;
