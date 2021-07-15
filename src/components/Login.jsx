import React from 'react';
import './Login.scss';
import { Redirect, useHistory } from 'react-router-dom';
import { useLoginData } from '../contexts/LoginDataContext';

import PersonalityLogo from './PersonalityLogo';

function Login() {
  const history = useHistory();
  const [login, setLogin] = React.useState({
    email: '',
    password: '',
  });

  const { loginData, setLoginData } = useLoginData();

  if (loginData != null) {
    return <Redirect to={`/screen/${loginData.userId}`} />;
  }

  function onChange(event) {
    setLogin({
      ...login,
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
      body: JSON.stringify(login),
    };
    const url = 'http://localhost:5000/login';
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert('Connexion réussie !');
          setLoginData(res);
          history.push(`/screen/${res.userId}`);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }
  return (
    <>
      <PersonalityLogo />
      <div className="FormLoginContainer">
        <div className="FormLogin">
          <form onSubmit={submitForm}>
            <fieldset>
              <legend>Connexion</legend>

              <div className="form-data">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={onChange}
                  value={login.email}
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <div className="form-data">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={onChange}
                  value={login.password}
                  placeholder="********"
                />
              </div>

              <hr />
              <input className="send-button" type="submit" value="Connexion" />
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
