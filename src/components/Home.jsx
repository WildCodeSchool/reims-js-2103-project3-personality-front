import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../pictures/hippotam-logo.png';
import './home.scss';

function Home() {
  return (
    <>
      <div className="home-container">
        <img className="logoPer" src={Logo} alt="logo" />
        <NavLink className="btnSign navSign" exact to="/register">
          Inscription
        </NavLink>
        <NavLink className="btnLog navLog" exact to="/login">
          Connexion
        </NavLink>
      </div>
    </>
  );
}

export default Home;
