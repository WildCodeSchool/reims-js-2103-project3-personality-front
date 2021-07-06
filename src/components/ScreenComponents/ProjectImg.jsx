import React from 'react';
import '../Screen.scss';

function ProjectImg() {
  return (
    <p className="bubble-text projetImg">
      <label className="label">
        {' '}
        Image d&apos;un projet :
      </label>
      <label className="label-file">
        Choisir un fichier
        <input type="file" className="input-file" />
      </label>
      <input className="submit" type="submit" value="&#10146;" />
    </p>
  );
}

export default ProjectImg;
