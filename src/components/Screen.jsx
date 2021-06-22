import React from 'react';
import Softskills from './ScreenComponents/Softskills';
import Hardskills from './ScreenComponents/Hardskills';
import Values from './ScreenComponents/Values';
import Ambition from './ScreenComponents/Ambition';
import Project from './ScreenComponents/Project';
import ProjectImg from './ScreenComponents/ProjectImg';
import ProjectPdf from './ScreenComponents/ProjectPdf';
import LastJob from './ScreenComponents/LastJob';
import Langues from './ScreenComponents/Langues';
import Diplome from './ScreenComponents/Diplome';
import Strength from './ScreenComponents/Strength';
import Personality from './ScreenComponents/Personality';
import Training from './ScreenComponents/Training';
import './Screen.scss';
import scarlett from '../pictures/scarlett_johansson.jpeg';
import Diapo from './ScreenComponents/Carousel';

const allClosed = {
  who: false, strength: false, what: false, pop: false,
};

function Screen() {
  const [isOpen, setOpen] = React.useState(allClosed);
  const toggle = (keyToOpen) => {
    setOpen({ ...allClosed, [keyToOpen]: !isOpen[keyToOpen] });
  };
  return (
    <>
      <div className="screen">
        <div className="screen-container">
          <img className="candidate-photo" src={scarlett} alt="scarlett" />
          <button className="btnWho" type="button" onClick={() => toggle('who')}>Qui suis-je ?</button>
          <button className="btnPop" type="button" onClick={() => toggle('pop')}>POP</button>
          <button className="btnStrength" type="button" onClick={() => toggle('strength')}>Mes Skills</button>
          <button className="btnWhat" type="button" onClick={() => toggle('what')}>What else ?</button>

          { isOpen.who === true && (
          <>
            <p className="bubble-text-flat candidate-name">Scarlett Johansson</p>
            <Personality />
            <Values />
            <Ambition />
          </>
          )}

          { isOpen.pop === true && (
          <>
            <Project />
            <ProjectPdf />
            <ProjectImg />
          </>
          )}

          { isOpen.strength === true && (
          <>
            <Softskills />
            <Hardskills />
            <Strength />
          </>
          )}

          { isOpen.what === true && (
          <>
            <Training />
            <Langues />
            <LastJob />
            <Diplome />
          </>
          )}

        </div>
      </div>
      <Diapo />
    </>
  );
}

export default Screen;
