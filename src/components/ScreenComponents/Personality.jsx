import React, { useContext } from 'react';
import ScreenContext from '../../contexts/ScreenContext';
import '../Screen.scss';
import Modal from './Modal';

function Personality() {
  const { play, setPlay } = useContext(ScreenContext);
  return (
    <>
      <p>Mes recommandations :</p>
      <button type="button" className="button personality" onClick={() => setPlay(!play)}>
        &#x25B8;
      </button>
      { play === true && (
        <>
          <Modal />
        </>
      )}
    </>
  );
}

export default Personality;
