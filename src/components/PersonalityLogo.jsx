import React from 'react';
import { NavLink } from 'react-router-dom';
import personnalityLogo from '../pictures/Logo_Personnality_Original.png';

function PersonalityLogo() {
  return (
    <NavLink exact to="/" type="button" activeClassName="active">
      <img className="personality-logo" src={personnalityLogo} alt="personality-logo" />
    </NavLink>
  );
}

export default PersonalityLogo;
