import React from 'react';
import './Recommandations.scss';
import VideoButton from './VideoButton';

function Recommandations() {
  return (
    <div className="recommandations-container">
      <p>Mes recommandations :</p>
      <div className="video-button-container">
        <VideoButton />
        <VideoButton />
        <VideoButton />
      </div>
    </div>
  );
}

export default Recommandations;
