import React from 'react';
import { useParams } from 'react-router-dom';
import ImputComponents from '../ImputComponents.jsx/ImputConditional';
import '../Screen.scss';

function Training() {
  const { id } = useParams();
  const [training, setTraining] = React.useState({
    t1: '',
  });

  function onChange(event) {
    setTraining({
      ...training,
      [event.target.name]: event.target.value,
    });
  }

  function submitForm(event) {
    event.preventDefault();
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(training),
    };
    const url = `http://localhost:5000/screen/${id}/training`;
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          console.log('succès');
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }
  return (
    <p className="bubble-text training">
      <form className="test" onSubmit={submitForm}>
        <label className="label">Votre dernière formation :</label>
        <ImputComponents type="text" name="t1" onChange={onChange} value={training.t1} />
        <input className="submit" type="submit" value="&#10146;" />
      </form>
    </p>
  );
}

export default Training;
