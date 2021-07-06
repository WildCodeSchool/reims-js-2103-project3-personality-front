import React from 'react';
import '../Screen.scss';

function Training() {
  return (
    <p className="bubble-text training">
      <label className="label">Votre dernière formation :</label>
      <input className="input" />
      <input className="submit" type="submit" value="&#10146;" />
    </p>
  );
}

export default Training;
