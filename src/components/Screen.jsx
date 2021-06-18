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

function Screen() {
  const [who, setWho] = React.useState(false);
  const [pop, setPop] = React.useState(false);
  const [strength, setStrength] = React.useState(false);
  const [what, setWhat] = React.useState(false);
  return (
    <>
      <div className="screen">
        <div className="screen-container">
          <img className="candidate-photo" src={scarlett} alt="scarlett" />
          <button className="btnWho" type="button" onClick={() => setWho(!who)}>Qui suis-je ?</button>
          <button className="btnPop" type="button" onClick={() => setPop(!pop)}>POP</button>
          <button className="btnStrength" type="button" onClick={() => setStrength(!strength)}>Mes Skills</button>
          <button className="btnWhat" type="button" onClick={() => setWhat(!what)}>What else ?</button>

          { who === true && (
          <>
            <p className="bubble-text-flat candidate-name">Scarlett Johansson</p>
            <Personality />
            <Values />
            <Ambition />
          </>
          )}

          { pop === true && (
          <>
            <Project />
            <ProjectPdf />
            <ProjectImg />
          </>
          )}

          { strength === true && (
          <>
            <Softskills />
            <Hardskills />
            <Strength />
          </>
          )}

          { what === true && (
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
