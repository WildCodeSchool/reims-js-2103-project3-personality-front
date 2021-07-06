import React from 'react';
import '../Screen.scss';

function ProfileImage() {
  return (
    <div className="profile-image">
      <label className="label">
        {' '}
        Votre photo :
      </label>
      <label className="label-file">
        Choisir un fichier
        <input type="file" className="input-file" />
      </label>
      <input className="submit-invert" type="submit" value="&#10146;" />
    </div>
  );
}

export default ProfileImage;
