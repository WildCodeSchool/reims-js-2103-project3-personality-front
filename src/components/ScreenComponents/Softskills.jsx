import React from 'react';
import '../Screen.scss';

function Softskills() {
  return (
    <p className="bubble-text soft-skills">
      <label className="label">Vos softskills :</label>
      <input className="input" />
      <input className="input" />
      <input className="input" />
      <input className="submit" type="submit" value="&#10146;" />
    </p>
  );
}

export default Softskills;
