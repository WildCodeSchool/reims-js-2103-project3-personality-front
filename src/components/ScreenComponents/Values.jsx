import React from 'react';
import { useParams } from 'react-router-dom';
import ImputComponents from '../ImputComponents/ImputConditional';
import '../Screen.scss';

function Values() {
  const { id } = useParams();
  const [value, setValue] = React.useState({
    v1: '',
    v2: '',
    v3: '',
  });

  function onChange(event) {
    setValue({
      ...value,
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
      body: JSON.stringify(value),
    };
    const url = `http://localhost:5000/screen/${id}/value`;
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
    <p className="bubble-text values">
      <form onSubmit={submitForm}>
        <label className="label">Vos valeurs :</label>
        <ImputComponents type="text" name="v1" onChange={onChange} value={value.v1} />
        <ImputComponents type="text" name="v2" onChange={onChange} value={value.v2} />
        <ImputComponents type="text" name="v3" onchange={onChange} value={value.v3} />
        <input className="submit" type="submit" value="&#10146;" />
      </form>
    </p>
  );
}

export default Values;
