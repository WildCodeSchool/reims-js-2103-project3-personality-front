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
        <div className="reco3">
          <img className="recoImg3" src={recoImg3} alt="recoImg3" />
          <h2>Albert DUPONTEL - DRH Les astres de lumière</h2>
          <p><i>&quot;Céline exerce avec déontologie, j&apos;entends pas là qu&apos;elle est tenue au secret professionnel, cette éthique lui permet de se démarquer de bien de ses confrères. Elle exerce son activité avec sincérité, loyauté et objectivité.&quot;</i></p>
        </div>
        <VideoButton className="reco2" videoSrc={recoVideo2} recoVideo={recoVideo2} imgSrc={recoImg2} />
      </div>
    </div>
  );
}

export default Recommandations;
