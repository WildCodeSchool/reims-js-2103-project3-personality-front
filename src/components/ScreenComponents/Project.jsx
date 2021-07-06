import React from 'react';
import '../Screen.scss';

function Project() {
  return (
    <p className="bubble-text projet">
      <label className="label">Vos projets :</label>
      <input
        type="url"
        placeholder="https://example.com/"
        className="input"
      />
      <input
        type="url"
        placeholder="https://example.com/"
        className="input"
      />
      <input
        type="url"
        placeholder="https://example.com/"
        className="input"
      />
      <input className="submit" type="submit" value="&#10146;" />
    </p>
  );
}

export default Project;
