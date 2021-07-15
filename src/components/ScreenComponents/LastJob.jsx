import React from 'react';
import { useParams } from 'react-router-dom';
import ImputComponents from '../ImputComponents/ImputConditional';
import arrowRight from '../../pictures/arrowRight.png';
import '../Screen.scss';

function LastJob() {
  const { id } = useParams();
  const [lastJob, setLastJob] = React.useState({
    lj1: '',
  });

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
      },
      body: JSON.stringify(lastJob),
    };
    const url = `http://localhost:5000/screen/${id}/lastJob`;
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
    <p className="bubble-text lastJob">
      <form className="test" onSubmit={submitForm}>
        <label className="label">
          Mon dernier
          <br />
          emploi :
        </label>
        <ImputComponents type="text" name="lj1" onChange={onChange} value={lastJob.lj1} />
        <button type="submit" className="submit"><img className="arrow-right" src={arrowRight} alt="arrow-right" /></button>
      </form>
    </p>
  );
}

export default LastJob;
