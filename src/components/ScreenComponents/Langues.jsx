import React from 'react';
import { useParams } from 'react-router-dom';
import ImputComponents from '../ImputComponents/ImputConditional';
import arrowRight from '../../pictures/arrowRight.png';
import '../Screen.scss';

function Langues() {
  const { id } = useParams();
  const [langues, setLangues] = React.useState({
    l1: '',
    l2: '',
    l3: '',
  });

  function onChange(event) {
    setLangues({
      ...langues,
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
      body: JSON.stringify(langues),
    };
    const url = `http://localhost:5000/screen/${id}/langues`;
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
    <p className="bubble-text langues">
      <span className="help-text-right">Renseignez les langues que vous parlez</span>
      <form className="form" onSubmit={submitForm}>
        <label className="label">
          Mes
          <br />
          langues parlées :
        </label>
        <ImputComponents type="text" name="l1" onChange={onChange} value={langues.l1} />
        <ImputComponents type="text" name="l2" onChange={onChange} value={langues.l2} />
        <button type="submit" className="submit"><img className="arrow-right" src={arrowRight} alt="arrow-right" /></button>
      </form>
    </p>
  );
}

export default Langues;
