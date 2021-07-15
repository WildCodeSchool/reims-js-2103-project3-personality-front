import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoginData } from '../../contexts/LoginDataContext';
import ImputComponents from '../ImputComponents/ImputConditional';
import '../Screen.scss';

function Hardskills() {
  const { id } = useParams();
  const { loginData } = useLoginData();
  const [hardskills, setHardskills] = React.useState({
    hk1: '',
    hk2: '',
    hk3: '',
  });
  React.useEffect(() => {
    fetch(`http://localhost:5000/screen/${id}/hardSkills`)
      .then((response) => response.json())
      .then((res) => {
        setHardskills(res.reduce((acc, hardskill) => ({ ...acc, [`hk${hardskill.number}`]: hardskill.hardSkillsName }), {}));
        console.log(res);
      });
  }, []);

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
        Authorization: `Bearer ${loginData.token}`,
      },
    };
    const url = `http://localhost:5000/screen/${id}/hardSkills`;
    for (let i = 1; i <= 3; i += 1) {
      config.body = JSON.stringify({ hardSkillsName: hardskills[`hk${i}`], number: i });
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
    <p className="bubble-text hard-skills">
      <form className="test" onSubmit={submitForm}>
        <label className="label">Vos hardskills :</label>
        <ImputComponents type="text" name="hk1" onChange={onChange} value={hardskills.hk1} />
        <ImputComponents type="text" name="hk2" onChange={onChange} value={hardskills.hk2} />
        <ImputComponents type="text" name="hk3" onChange={onChange} value={hardskills.hk3} />
        <input className="submit" type="submit" value="&#10146;" />
      </form>
    </p>
  );
}

export default Hardskills;
