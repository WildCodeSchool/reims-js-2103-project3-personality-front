import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoginData } from '../../contexts/LoginDataContext';
import ImputComponents from '../ImputComponents/ImputConditional';
import arrowRight from '../../pictures/arrowRight.png';
import '../Screen.scss';

function Strength() {
  const { id } = useParams();
  const { loginData } = useLoginData();
  const [strength, setStrength] = React.useState({
    s1: '',
    s2: '',
    s3: '',
  });
  React.useEffect(() => {
    fetch(`http://localhost:5000/screen/${id}/strength`)
      .then((response) => response.json())
      .then((res) => {
        setStrength(res.reduce((acc, strengths) => ({ ...acc, [`s${strengths.number}`]: strengths.strength }), {}));
        console.log(res);
      });
  }, []);

  function onChange(event) {
    setStrength({
      ...strength,
      [event.target.name]: event.target.value,
    });
  }

  function submitForm(event) {
    event.preventDefault();
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${loginData.token}`,
      },
    };
    const url = `http://localhost:5000/screen/${id}/strength`;
    for (let i = 1; i <= 3; i += 1) {
      config.body = JSON.stringify({ strength: strength[`s${i}`], number: i });
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
  }
  return (
    <p className="bubble-text strength">
      <form className="form" onSubmit={submitForm}>
        <label className="label">Mes forces :</label>
        <ImputComponents type="text" name="s1" onChange={onChange} value={strength.s1} />
        <ImputComponents type="text" name="s2" onChange={onChange} value={strength.s2} />
        <ImputComponents type="text" name="s3" onChange={onChange} value={strength.s3} />
        <button type="submit" className="submit"><img className="arrow-right" src={arrowRight} alt="arrow-right" /></button>
      </form>
    </p>
  );
}

export default Strength;
