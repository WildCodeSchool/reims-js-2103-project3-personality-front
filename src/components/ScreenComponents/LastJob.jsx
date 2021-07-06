import React from 'react';
import '../Screen.scss';

function LastJob() {
  return (
    <p className="bubble-text lastJob">
      <label className="label">Votre dernier emploi :</label>
      <input className="input" />
      <input className="submit" type="submit" value="&#10146;" />
    </p>
  );
}

export default LastJob;
