/* eslint-disable max-len */
import React from 'react';
import recoImg1 from '../../pictures/recoImg1.jpg';
import recoVideo1 from '../../pictures/recoVideo1.mp4';
import recoImg2 from '../../pictures/recoImg2.jpg';
import recoVideo2 from '../../pictures/recoVideo2.mp4';
import recoImg3 from '../../pictures/recoImg3.jpg';
import './Recommandations.scss';
import VideoButton from './VideoButton';

function Recommandations() {
  return (
    <div className="recommandations-container">
      <p>Mes recommandations :</p>
      <div className="video-button-container">
        <VideoButton className="reco1" videoSrc={recoVideo1} recoVideo={recoVideo1} imgSrc={recoImg1} />
        <VideoButton className="reco2" videoSrc={recoVideo2} recoVideo={recoVideo2} imgSrc={recoImg2} />
        <div className="reco3">
          <img className="recoImg3" src={recoImg3} alt="recoImg3" />
          <h2>Albert DUPONTEL - DRH Les parapluies de Cherbourg</h2>
          <p><i>&quot;En ma qualité de DRH de la société des parapluies de Cherbourg, je recommande sincèrement Jean-Claude Duss pour ses qualités de gestionnaire des stocks de baleines et de matériaux rares en provenance du Honduras.&quot;</i></p>
        </div>
      </div>
    </div>
  );
}

export default Recommandations;
