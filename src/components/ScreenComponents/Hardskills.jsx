import React from 'react';
import { useParams } from 'react-router-dom';
import ImputComponents from '../ImputComponents.jsx/ImputConditional';
import '../Screen.scss';

function Hardskills() {
  const { id } = useParams();
  const [hardskills, setHardskills] = React.useState({
    hk1: '',
    hk2: '',
    hk3: '',
  });

  function onChange(event) {
    setHardskills({
      ...hardskills,
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
      body: JSON.stringify(hardskills),
    };
    const url = `http://localhost:5000/screen/${id}/hardskills`;
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
    <p className="bubble-text hard-skills">
      <form className="test" onSubmit={submitForm}>
        <label className="label">Vos hardskills :</label>
        <ImputComponents type="text" name="hk1" onChange={onChange} value={hardskills.hk1} />
        <ImputComponents type="text" name="hk2" onChange={onChange} value={hardskills.hk2} />
        <ImputComponents type="text" name="hk3" onchange={onChange} value={hardskills.hk3} />
        <input className="submit" type="submit" value="&#10146;" />
      </form>
    </p>
  );
}

export default Hardskills;
