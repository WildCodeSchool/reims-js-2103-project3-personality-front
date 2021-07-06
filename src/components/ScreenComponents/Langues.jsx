import React from 'react';
import '../Screen.scss';

function Langues() {
  return (
    <p className="bubble-text langues">
      <label className="label">Langues :</label>
      <input className="input" />
      <input className="input" />
      <input className="input" />
      <input className="submit" type="submit" value="&#10146;" />
    </p>
  );
}

export default Langues;
