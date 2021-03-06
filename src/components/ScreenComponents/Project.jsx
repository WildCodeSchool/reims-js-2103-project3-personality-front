import React from 'react';
import { useParams } from 'react-router-dom';
import ImputComponents from '../ImputComponents/ImputConditional';
import arrowRight from '../../pictures/arrowRight.png';
import '../Screen.scss';

function Project() {
  const { id } = useParams();
  const [projet, setProjet] = React.useState({
    p1: '',
    p2: '',
    p3: '',
  });

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_BACK_URL}/screen/${id}/softskills`)
      .then((response) => response.json())
      .then((res) => {
        setProjet(res.reduce((acc, pops) => ({ ...acc, [`sk${pops.number}`]: pops.projet }), {}));
        console.log(res);
      });
  }, []);
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
    const url = `${process.env.REACT_APP_BACK_URL}/screen/${id}/pop`;
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
    <p className="bubble-text project">
      <span className="help-text-left">Entrez les URL de vos projets perso</span>
      <form className="form" onSubmit={submitForm}>
        <label className="label">Mes projets :</label>
        <ImputComponents type="url" name="p1" onChange={onChange} value="https://www.hypnose.fr" />
        <ImputComponents type="url" name="p2" onChange={onChange} value="https://www.voyance-medium.fr/" />
        <ImputComponents type="url" name="p3" onchange={onChange} value={projet.p3} />
        <button type="submit" className="submit"><img className="arrow-right" src={arrowRight} alt="arrow-right" /></button>
      </form>
    </p>
  );
}

export default Project;
