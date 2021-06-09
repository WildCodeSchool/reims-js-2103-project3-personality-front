import React from 'react';
import Softskills from './ScreenComponents/Softskills';
import Hardskills from './ScreenComponents/Hardskills';
import Values from './ScreenComponents/Values';
import Ambition from './ScreenComponents/Ambition';
import './Screen.scss';

function Screen() {
  return (
    <>
      <div className="bubble-container">
        <img className="personality-logo-bad" src="https://nsa40.casimages.com/img/2021/06/04/210604110025422732.jpg" alt="personality-logo-bad" />
        <Softskills />
        <Hardskills />
        <img className="scarlett" src="https://nsa40.casimages.com/img/2021/06/03/21060303483183534.jpg" alt="scarlett" />
        <Values />
        <Ambition />

      </div>
    </>
  );
}

export default Screen;
