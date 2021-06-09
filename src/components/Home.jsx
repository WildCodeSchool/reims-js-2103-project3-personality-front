import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../pictures/personality_logo.png';
import './home.scss';

function Home() {
  const [login, setLogin] = React.useState(false);
  const [signup, setSignup] = React.useState(false);
  return (
    <>
      <div className="home-container">
        <img className="logoPer" src={Logo} alt="logo" />
        <NavLink className="navLog" exact to="/screen">
          <button className="btnLog" type="button" onClick={() => setLogin(!login)}>Login</button>
        </NavLink>
        <NavLink className="navSign" exact to="/register">
          <button className="btnSign" type="button" onClick={() => setSignup(!signup)}>SignUp</button>
        </NavLink>
      </div>
    </>
  );
}

export default Home;
