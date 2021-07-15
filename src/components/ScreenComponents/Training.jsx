import React from 'react';
import { useParams } from 'react-router-dom';
import ImputComponents from '../ImputComponents/ImputConditional';
import arrowRight from '../../pictures/arrowRight.png';
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
      <span className="help-text-top">Renseignez la dernière formation que vous avez effectuée</span>
      <form className="form" onSubmit={submitForm}>
        <label className="label">
          Ma dernière
          <br />
          formation :
        </label>
        <ImputComponents type="text" name="t1" onChange={onChange} value={training.t1} />
        <button type="submit" className="submit"><img className="arrow-right" src={arrowRight} alt="arrow-right" /></button>
      </form>
    </p>
  );
}

export default Training;
