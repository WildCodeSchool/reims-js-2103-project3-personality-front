import React from 'react';
import ImputFiles from '../ImputComponents/ImputFiles';
import arrowRight from '../../pictures/arrowRight.png';
import '../Screen.scss';

function ProfileImage() {
  const [selectedFile, setSelectedFile] = React.useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append('File', selectedFile);

    fetch(
      'http://localhost:5000/upload',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div className="profile-image">
      <span className="help-text-bottom-profile">Uploadez votre plus belle photo</span>
      <label className="label-shadow">
        Ma photo :
      </label>
      <label className="label-file">
        Choisir un fichier
        <ImputFiles name="File" onChange={changeHandler} />
      </label>
      <button type="submit" className="submit" onClick={handleSubmission}><img className="arrow-right" src={arrowRight} alt="arrow-right" /></button>
    </div>
  );
}

export default ProfileImage;
