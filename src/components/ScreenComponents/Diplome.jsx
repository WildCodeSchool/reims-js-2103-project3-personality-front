import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoginData } from '../../contexts/LoginDataContext'
import arrowRight from '../../pictures/arrowRight.png';
import ImputComponents from '../ImputComponents/ImputConditional';
import '../Screen.scss';

function Diplome() {
  const { id } = useParams();
  const { loginData } = useLoginData();
  const [diplome, setDiplome] = React.useState({
    d1: '',
  });
  React.useEffect(() => {
    fetch(`http://localhost:5000/screen/${id}/diplome`)
      .then((response) => response.json())
      .then((res) => {
        setDiplome(res.reduce((acc, diplomes) => ({ ...acc, [`d${diplomes.number}`]: diplomes.diplome }), {}));
        console.log(res);
      });
  }, []);

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
        Authorization: `Bearer ${loginData.token}`,
      },
    };
    const url = `http://localhost:5000/screen/${id}/diplome`;
    for (let i = 1; i <= 1; i += 1) {
      config.body = JSON.stringify({ diplome: diplome[`d${i}`], number: i });
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
    <p className="bubble-text diplome">
      <form className="form" onSubmit={submitForm}>
        <label className="label">
          Mon diplôme
          <br />
          le plus élevé :
        </label>
        <ImputComponents type="text" name="d1" onChange={onChange} value={diplome.d1} />
        <button type="submit" className="submit"><img className="arrow-right" src={arrowRight} alt="arrow-right" /></button>
      </form>
    </p>
  );
}

export default Diplome;
