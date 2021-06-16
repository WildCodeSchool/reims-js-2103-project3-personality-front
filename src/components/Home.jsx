import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../pictures/Logo_Personnality_Original.png';
import './home.scss';

function Home() {
  return (
    <>
      <div className="home-container">
        <img className="logoPer" src={Logo} alt="logo" />
        <NavLink className="btnLog navLog" exact to="/login">
          Login
        </NavLink>
        <NavLink className="btnSign navSign" exact to="/register">
          SignUp
        </NavLink>
      </div>
    </>
  );
}

export default Home;
