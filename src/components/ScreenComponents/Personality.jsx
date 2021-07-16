import React from 'react';
import ReactPlayer from 'react-player';
import playSymbol from '../../pictures/playSymbol.png';
import '../Screen.scss';
import Modal from './Modal';

function Personality() {
  return (
    <Modal
      buttonClassName="personality-button"
      buttonContent={(
        <>
          Ma présentation :
          <img className="play-symbol" src={playSymbol} alt="arrow-right" />
          <span className="help-text-bottom">Enregistrez une courte vidéo de présentation. Soyez détendu, simple et naturel.</span>
        </>
  )}
    >
      <ReactPlayer className="player" url="https://www.youtube.com/watch?v=UF7ES0xwVvM&t=2s&ab_channel=CelineFrenchMedium" playing volume="0.5" />
    </Modal>
  );
}

export default Personality;
