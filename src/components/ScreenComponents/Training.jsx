import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoginData } from '../../contexts/LoginDataContext';
import ImputComponents from '../ImputComponents/ImputConditional';
import '../Screen.scss';

function Training() {
  const { id } = useParams();
  const { loginData } = useLoginData();
  const [training, setTraining] = React.useState({
    t1: '',
  });
  React.useEffect(() => {
    fetch(`http://localhost:5000/screen/${id}/formation`)
      .then((response) => response.json())
      .then((res) => {
        setTraining(res.reduce((acc, trainings) => ({ ...acc, [`t${trainings.number}`]: trainings.formation }), {}));
        console.log(res);
      });
  }, []);

  function onChange(event) {
    setTraining({
      ...training,
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
    const url = `http://localhost:5000/screen/${id}/formation`;
    for (let i = 1; i <= 1; i += 1) {
      config.body = JSON.stringify({ formation: training[`t${i}`], number: i });
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
    <p className="bubble-text training">
      <form className="test" onSubmit={submitForm}>
        <label className="label">Votre dernière formation :</label>
        <ImputComponents type="text" name="t1" onChange={onChange} value={training.t1} />
        <input className="submit" type="submit" value="&#10146;" />
      </form>
    </p>
  );
}

export default Training;
