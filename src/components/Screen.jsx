import React from 'react';
import Softskills from './ScreenComponents/Softskills';
import Hardskills from './ScreenComponents/Hardskills';
import Values from './ScreenComponents/Values';
import Ambition from './ScreenComponents/Ambition';
import AxisOfProgression from './ScreenComponents/AxisOfProgression';
import Strength from './ScreenComponents/Strength';
import Personality from './ScreenComponents/Personality';
import StateOfMind from './ScreenComponents/StateOfMind';
import './Screen.scss';
import PersonalityLogo from './PersonalityLogo';
import scarlett from '../pictures/scarlett_johansson.jpeg';

function Screen() {
  return (
    <>
      <div className="screen-container">
        <PersonalityLogo />
        <Softskills />
        <Hardskills />
        <p className="bubble-text-flat candidate-name">Scarlett Johansson</p>
        <img className="candidate-photo" src={scarlett} alt="scarlett" />
        <Values />
        <Ambition />
        <AxisOfProgression />
        <Personality />
        <Strength />
        <StateOfMind />
      </div>
    </>
  );
}

export default Screen;
