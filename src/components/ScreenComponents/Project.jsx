import React from 'react';
import { useParams } from 'react-router-dom';
import ImputComponents from '../ImputComponents/ImputConditional';
import '../Screen.scss';

function Project() {
  const { id } = useParams();
  const [projet, setProjet] = React.useState({
    p1: '',
    p2: '',
    p3: '',
  });

  function onChange(event) {
    setProjet({
      ...projet,
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
      body: JSON.stringify(projet),
    };
    const url = `http://localhost:5000/screen/${id}/projet`;
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
    <p className="bubble-text projet">
      <form className="test" onSubmit={submitForm}>
        <label className="label">Vos projet :</label>
        <ImputComponents type="url" name="p1" onChange={onChange} value={projet.p1} />
        <ImputComponents type="url" name="p2" onChange={onChange} value={projet.p2} />
        <ImputComponents type="url" name="p3" onchange={onChange} value={projet.p3} />
        <input className="submit" type="submit" value="&#10146;" />
      </form>
    </p>
  );
}

export default Project;
