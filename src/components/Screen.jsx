import React from 'react';
import './Screen.scss';

function Screen() {
  return (
    <>
      <div className="bubble-container">
        <img className="personality-logo-bad" src="https://nsa40.casimages.com/img/2021/06/04/210604110025422732.jpg" alt="personality-logo-bad" />
        <p className="bubble-text yellow">
          <span>
            Soft skills
          </span>
        </p>
        <p className="bubble-text violet">
          <span>
            Candidat profile
          </span>
        </p>
        <img className="scarlett" src="https://nsa40.casimages.com/img/2021/06/03/21060303483183534.jpg" alt="scarlett" />
        <p className="bubble-text green">
          <span>
            Photos
          </span>
        </p>
        <p className="bubble-text pink">
          <span>
            Hard skills
          </span>
        </p>
      </div>
    </>
  );
}

export default Screen;
