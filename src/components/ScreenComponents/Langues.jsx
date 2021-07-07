import React from 'react';
import { useParams } from 'react-router-dom';
import ImputComponents from '../ImputComponents.jsx/ImputConditional';
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
      <form className="test" onSubmit={submitForm}>
        <label className="label">Vos langues :</label>
        <ImputComponents type="text" name="l1" onChange={onChange} value={langues.l1} />
        <ImputComponents type="text" name="l2" onChange={onChange} value={langues.l2} />
        <ImputComponents type="text" name="l3" onchange={onChange} value={langues.l3} />
        <input className="submit" type="submit" value="&#10146;" />
      </form>
    </p>
  );
}

export default Langues;
