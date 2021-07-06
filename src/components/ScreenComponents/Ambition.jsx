import React from 'react';
import '../Screen.scss';

function Ambition() {
  return (
    <p className="bubble-text ambition">
      <label className="label">Vos ambitions :</label>
      <input className="input" />
      <input className="input" />
      <input className="input" />
      <input className="submit" type="submit" value="&#10146;" />
    </p>
  );
}

export default Ambition;
