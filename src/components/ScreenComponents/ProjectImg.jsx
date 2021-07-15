import React from 'react';
import { useParams } from 'react-router-dom';
import ImputFiles from '../ImputComponents/ImputFiles';
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
      `http://localhost:5000/screen/${id}/pop`,
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
      <label className="label">
        {' '}
        Image d&apos;un projet :
      </label>
      <label className="label-file">
        Choisir un fichier
        <ImputFiles name="File" onChange={changeHandler} />
      </label>
      <p>
        Filename:
        {selectedFile}
      </p>
      <button type="submit" className="submit-invert" onClick={handleSubmission}>&#10146;</button>
    </p>
  );
}

export default ProjectImg;
