import React from 'react';
import '../Screen.scss';

function Hardskills() {
  return (
    <p className="bubble-text hard-skills">
      <label className="label">Vos hardskills :</label>
      <input className="input" />
      <input className="input" />
      <input className="input" />
      <input className="submit" type="submit" value="&#10146;" />
    </p>
  );
}

export default Hardskills;
