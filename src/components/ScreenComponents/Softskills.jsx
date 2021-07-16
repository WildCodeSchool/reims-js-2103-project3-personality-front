import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoginData } from '../../contexts/LoginDataContext';
import ImputComponents from '../ImputComponents/ImputConditional';
import arrowRight from '../../pictures/arrowRight.png';
import '../Screen.scss';

function Softskills() {
  const { id } = useParams();
  const { loginData } = useLoginData();
  const [softskills, setSoftskills] = React.useState({
    sk1: '',
    sk2: '',
    sk3: '',
  });

  React.useEffect(() => {
    fetch(`http://localhost:5000/screen/${id}/softskills`)
      .then((response) => response.json())
      .then((res) => {
        setSoftskills(res.reduce((acc, softskill) => ({ ...acc, [`sk${softskill.number}`]: softskill.softskills }), {}));
        console.log(res);
      });
  }, []);

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
        Authorization: `Bearer ${loginData.token}`,
      },
    };
    const url = `http://localhost:5000/screen/${id}/softskills`;
    for (let i = 1; i <= 3; i += 1) {
      config.body = JSON.stringify({ softskills: softskills[`sk${i}`], number: i });
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
    <p className="bubble-text soft-skills">
      <span className="help-text-right">Listez vos softskills qui vous paraissent les plus importantes</span>
      <form className="form" onSubmit={submitForm}>
        <label className="label">Mes softskills :</label>
        <ImputComponents type="text" name="sk1" onChange={onChange} value={softskills.sk1} />
        <ImputComponents type="text" name="sk2" onChange={onChange} value={softskills.sk2} />
        <ImputComponents type="text" name="sk3" onChange={onChange} value={softskills.sk3} />
        <button type="submit" className="submit"><img className="arrow-right" src={arrowRight} alt="arrow-right" /></button>
      </form>
    </p>
  );
}

export default Softskills;
