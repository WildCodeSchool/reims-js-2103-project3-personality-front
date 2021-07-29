import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoginData } from '../../contexts/LoginDataContext';
import ImputComponents from '../ImputComponents/ImputConditional';
import arrowRight from '../../pictures/arrowRight.png';
import '../Screen.scss';

function Values() {
  const { id } = useParams();
  const { loginData } = useLoginData();
  const [value, setValue] = React.useState({
    v1: '',
    v2: '',
    v3: '',
  });
  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_BACK_URL}/screen/${id}/values`)
      .then((response) => response.json())
      .then((res) => {
        setValue(res.reduce((acc, values) => ({ ...acc, [`v${values.number}`]: values.valueName }), {}));
        console.log(res);
      });
  }, []);

  function onChange(event) {
    setValue({
      ...value,
      [event.target.name]: event.target.values,
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
    const url = `${process.env.REACT_APP_BACK_URL}/screen/${id}/values`;
    for (let i = 1; i <= 3; i += 1) {
      config.body = JSON.stringify({ valueName: value[`v${i}`], number: i });
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
    <p className="bubble-text values">
      <span className="help-text-right">Renseignez les valeurs qui vous sont chères</span>
      <form className="form" onSubmit={submitForm}>
        <label className="label">Mes valeurs :</label>
        <ImputComponents type="text" name="v1" onChange={onChange} value={value.v1} />
        <ImputComponents type="text" name="v2" onChange={onChange} value={value.v2} />
        <ImputComponents type="text" name="v3" onChange={onChange} value={value.v3} />
        <button type="submit" className="submit"><img className="arrow-right" src={arrowRight} alt="arrow-right" /></button>
      </form>
    </p>
  );
}

export default Values;
