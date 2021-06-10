import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import ScreenContext from '../../contexts/ScreenContext';
import '../Modal.scss';

function Modal() {
  const { play, setPlay } = useContext(ScreenContext);
  return (
    <div className="modal-container">
      <button type="button" className="btnclose" onClick={() => setPlay(!play)}>&#x2717;</button>
      <ReactPlayer className="player" url="https://www.youtube.com/watch?v=J4YkP30PQXU&ab_channel=ValdSullyvanValdSullyvan" />
    </div>
  );
}

export default Modal;
