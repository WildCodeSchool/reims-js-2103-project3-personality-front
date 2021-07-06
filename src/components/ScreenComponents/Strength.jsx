import React from 'react';
import '../Screen.scss';

function Strength() {
  return (
    <p className="bubble-text strength">
      <label className="label">Vos forces :</label>
      <input className="input" />
      <input className="input" />
      <input className="input" />
      <input className="submit" type="submit" value="&#10146;" />
    </p>
  );
}

export default Strength;
