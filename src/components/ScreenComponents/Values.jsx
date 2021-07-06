import React from 'react';
import '../Screen.scss';

function Values() {
  return (
    <p className="bubble-text values">
      <label className="label">Vos valeurs :</label>
      <input className="input" />
      <input className="input" />
      <input className="input" />
      <input className="submit" type="submit" value="&#10146;" />
    </p>
  );
}

export default Values;
