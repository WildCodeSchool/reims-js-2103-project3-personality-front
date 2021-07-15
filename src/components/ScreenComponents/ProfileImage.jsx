import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoginData } from '../../contexts/LoginDataContext';
import ImputFiles from '../ImputComponents/ImputFiles';
import '../Screen.scss';

function ProfileImage() {
  const { id } = useParams();
  const { loginData } = useLoginData();
  const [selectedFile, setSelectedFile] = React.useState();
  const [photo, setPhoto] = React.useState();

  React.useEffect(() => {
    fetch(`http://localhost:5000/screen/${id}/photos`)
      .then((response) => response.json())
      .then((res) => {
        setPhoto(res);
        console.log(res);
      });
  }, []);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append('File', selectedFile);

    fetch(
      `http://localhost:5000/screen/${id}/photos`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${loginData.token}` },
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
      <label className="label">
        {' '}
        Votre photo :
      </label>
      <label className="label-file">
        Choisir un fichier
        <ImputFiles name="File" onChange={changeHandler} />
      </label>
      <button type="submit" className="submit-invert" onClick={handleSubmission} src={photo} alt="">&#10146;</button>
    </div>
  );
}

export default ProfileImage;
