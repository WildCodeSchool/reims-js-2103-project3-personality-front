import React, { useContext } from 'react';
import ScreenContext from '../../contexts/ScreenContext';
import '../Screen.scss';
import Modal from './Modal';

function Personality() {
  const { play, setPlay } = useContext(ScreenContext);
  return (
    <>
      <button type="button" className="button personality" onClick={() => setPlay(!play)}>
        &#9654;
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
