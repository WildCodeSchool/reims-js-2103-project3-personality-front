import React from 'react';
import './Screen.scss';

function Screen() {
  return (
    <>
      <div className="bubble-container">
        <img className="personality-logo" src="https://nsa40.casimages.com/img/2021/06/09/21060909503933647.gif" alt="personality-logo-bad" />
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
        <img className="scarlett-photo" src="https://nsa40.casimages.com/img/2021/06/03/21060303483183534.jpg" alt="scarlett" />
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
