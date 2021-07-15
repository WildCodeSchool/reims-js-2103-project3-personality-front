import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoginData } from '../../contexts/LoginDataContext';
import ImputComponents from '../ImputComponents/ImputConditional';
import '../Screen.scss';

function LastJob() {
  const { id } = useParams();
  const { loginData } = useLoginData();
  const [lastJob, setLastJob] = React.useState({
    lj1: '',
  });
  React.useEffect(() => {
    fetch(`http://localhost:5000/screen/${id}/lastjob`)
      .then((response) => response.json())
      .then((res) => {
        setLastJob(res.reduce((acc, lastjobs) => ({ ...acc, [`lj${lastjobs.number}`]: lastjobs.lastjob }), {}));
        console.log(res);
      });
  }, []);

  function onChange(event) {
    setLastJob({
      ...lastJob,
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
    const url = `http://localhost:5000/screen/${id}/lastjob`;
    for (let i = 1; i <= 1; i += 1) {
      config.body = JSON.stringify({ lastjob: lastJob[`lj${i}`], number: i });
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
    <p className="bubble-text lastJob">
      <form className="test" onSubmit={submitForm}>
        <label className="label">Votre dernier emploi :</label>
        <ImputComponents type="text" name="lj1" onChange={onChange} value={lastJob.lj1} />
        <input className="submit" type="submit" value="&#10146;" />
      </form>
    </p>
  );
}

export default LastJob;
