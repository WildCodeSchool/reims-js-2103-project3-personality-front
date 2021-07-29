import React from 'react';
import { useParams } from 'react-router-dom';
import ImputFiles from '../ImputComponents/ImputFiles';
import arrowRight from '../../pictures/arrowRight.png';
import '../Screen.scss';

function ProjectImg() {
  const { id } = useParams();
  const [selectedFile, setSelectedFile] = React.useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append('File', selectedFile);

    fetch(
      `${process.env.REACT_APP_BACK_URL}/screen/${id}/pop`,
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
    <p className="bubble-text projetImg">
      <span className="help-text-bottom">Uploadez l&apos;image d&apos;un projet perso</span>
      <label className="label">
        {' '}
        Image d&apos;un projet :
      </label>
      <label className="label-file">
        Choisir un fichier
        <ImputFiles name="File" onChange={changeHandler} />
      </label>
      {/* <p>
        Filename:
        {selectedFile}
      </p> */}
      <button type="submit" className="submit" onClick={handleSubmission}><img className="arrow-right" src={arrowRight} alt="arrow-right" /></button>
    </p>
  );
}

export default ProjectImg;
