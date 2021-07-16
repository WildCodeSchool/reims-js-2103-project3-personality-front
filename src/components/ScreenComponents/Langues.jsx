import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoginData } from '../../contexts/LoginDataContext';
import ImputComponents from '../ImputComponents/ImputConditional';
import arrowRight from '../../pictures/arrowRight.png';
import '../Screen.scss';

function Langues() {
  const { id } = useParams();
  const { loginData } = useLoginData();
  const [langues, setLangues] = React.useState({
    l1: '',
    l2: '',
  });
  React.useEffect(() => {
    fetch(`http://localhost:5000/screen/${id}/langues`)
      .then((response) => response.json())
      .then((res) => {
        setLangues(res.reduce((acc, langue) => ({ ...acc, [`l${langue.number}`]: langue.langueName }), {}));
        console.log(res);
      });
  }, []);

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
        Authorization: `Bearer ${loginData.token}`,
      },
    };
    const url = `http://localhost:5000/screen/${id}/langues`;
    for (let i = 1; i <= 2; i += 1) {
      config.body = JSON.stringify({ langueName: langues[`l${i}`], number: i });
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
