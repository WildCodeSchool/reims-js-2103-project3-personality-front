import React from 'react';
import '../Screen.scss';

function Diplome() {
  return (
    <p className="bubble-text diplome">
      <label className="label">Votre dernier diplôme :</label>
      <input className="input" />
      <input className="submit" type="submit" value="&#10146;" />
    </p>
  );
}

export default Diplome;
