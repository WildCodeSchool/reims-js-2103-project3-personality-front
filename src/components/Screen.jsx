import React from 'react';
import Softskills from './ScreenComponents/Softskills';
import Hardskills from './ScreenComponents/Hardskills';
import Values from './ScreenComponents/Values';
import Ambition from './ScreenComponents/Ambition';
import Axisofprogression from './ScreenComponents/Axisofprogression';
import Personality from './ScreenComponents/Strength';
import Strength from './ScreenComponents/Personality';
import Stateofmind from './ScreenComponents/Stateofmind';
import './Screen.scss';
import PersonalityLogo from './PersonalityLogo';

function Screen() {
  return (
    <>
      <div className="screen-container">
        <PersonalityLogo />
        <Softskills />
        <Hardskills />
        <p className="bubble-text-flat candidate-name">Scarlett Johansson</p>
        <img className="candidate-photo" src="https://nsa40.casimages.com/img/2021/06/03/21060303483183534.jpg" alt="scarlett" />
        <Values />
        <Ambition />
        <Axisofprogression />
        <Personality />
        <Strength />
        <Stateofmind />
      </div>
    </>
  );
}

export default Screen;
