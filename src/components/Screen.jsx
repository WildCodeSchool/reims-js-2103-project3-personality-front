import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
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
import ProfileImage from './ScreenComponents/ProfileImage';
import './Screen.scss';
import Diapo from './ScreenComponents/Carousel';
import Recommandations from './ScreenComponents/Recommandations';
import PersonalityLogo from './PersonalityLogo';
import scrollDown from '../pictures/scroll-down.png';

const allClosed = {
  who: false, strength: false, what: false, pop: false,
};

function Screen() {
  const [isOpen, setOpen] = useState(allClosed);
  const [name, setName] = useState();
  const toggle = (keyToOpen) => {
    setOpen({ ...allClosed, [keyToOpen]: !isOpen[keyToOpen] });
  };

  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACK_URL}/users/${id}`)
      .then((response) => response.json())
      .then((res) => {
        setName(res.name);
      });
  }, []);

  return (
    <div className="screen">
      <PersonalityLogo />
      <section id="section-1" className="screen-container">
        <Scrollspy className="scrollspy" items={['section-1', 'section-2', 'section-3']} currentClassName="is-current">
          <li><a className="button-scroll" href="#section-1">&#x2B24;</a></li>
          <li><a className="button-scroll" href="#section-2">&#x2B24;</a></li>
          <li><a className="button-scroll" href="#section-3">&#x2B24;</a></li>
        </Scrollspy>

        <ProfileImage />
        <button href="b" className="btnWho" type="button" onClick={() => toggle('who')}>Qui suis-je ?</button>
        <button className="btnPop" type="button" onClick={() => toggle('pop')}>Mes projets</button>
        <button className="btnStrength" type="button" onClick={() => toggle('strength')}>Mes skills</button>
        <button className="btnWhat" type="button" onClick={() => toggle('what')}>What else ?</button>

        { isOpen.who === true && (
          <>
            <div className="bubble-text-flat candidate-name">
              <p>{name}</p>
            </div>
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

        <img className="scroll-down" src={scrollDown} alt="scroll-down" />

      </section>

      <section id="section-2">
        <Diapo />
      </section>

      <section id="section-3">
        <Recommandations />
      </section>

    </div>
  );
}

export default Screen;
