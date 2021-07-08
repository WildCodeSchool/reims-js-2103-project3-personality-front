import React from 'react';
import { useParams } from 'react-router-dom';
import ImputComponents from '../ImputComponents/ImputConditional';
import '../Screen.scss';

function Diplome() {
  const { id } = useParams();
  const [diplome, setDiplome] = React.useState({
    d1: '',
  });

  function onChange(event) {
    setDiplome({
      ...diplome,
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
      body: JSON.stringify(diplome),
    };
    const url = `http://localhost:5000/screen/${id}/diplome`;
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
    <p className="bubble-text diplome">
      <form className="test" onSubmit={submitForm}>
        <label className="label">Vos diplome :</label>
        <ImputComponents type="text" name="d1" onChange={onChange} value={diplome.d1} />
        <input className="submit" type="submit" value="&#10146;" />
      </form>
    </p>
  );
}

export default Diplome;
