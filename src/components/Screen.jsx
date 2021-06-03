import React from 'react';
import './Screen.scss';

function Screen() {
  return (
    <div className="bubble-container">
      <p className="bubble-text yellow">
        <span>
          Soft skills
        </span>
      </p>
      <p className="bubble-text violet">
        <span>
          Candidat
        </span>
      </p>
      <p className="bubble-text green">
        <span>
          Swipe
        </span>
      </p>
      <p className="bubble-text pink">
        <span>
          Hard skills
        </span>
      </p>
    </div>
  );
}

export default Screen;
