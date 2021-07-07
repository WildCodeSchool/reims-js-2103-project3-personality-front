import React from 'react';
import { useParams } from 'react-router-dom';
import ImputComponents from '../ImputComponents.jsx/ImputConditional';
import '../Screen.scss';

function Softskills() {
  const { id } = useParams();
  const [softskills, setSoftskills] = React.useState({
    sk1: '',
    sk2: '',
    sk3: '',
  });

  function onChange(event) {
    setSoftskills({
      ...softskills,
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
      body: JSON.stringify(softskills),
    };
    const url = `http://localhost:5000/screen/${id}/softskills`;
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
    <p className="bubble-text soft-skills">
      <form className="test" onSubmit={submitForm}>
        <label className="label">Vos softskills :</label>
        <ImputComponents type="text" name="sk1" onChange={onChange} value={softskills.sk1} />
        <ImputComponents type="text" name="sk2" onChange={onChange} value={softskills.sk2} />
        <ImputComponents type="text" name="sk3" onchange={onChange} value={softskills.sk3} />
        <input className="submit" type="submit" value="&#10146;" />
      </form>
    </p>
  );
}

export default Softskills;
