import React from 'react';
import PersonalityLogo from './PersonalityLogo';
import './Register.scss';

function Register() {
  const [user, setUser] = React.useState({
    name: '',
    username: '',
    email: '',
    password: '',
    phone: '',
  });
  function onChange(event) {
    setUser({
      ...user,
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
      body: JSON.stringify(user),
    };
    const url = 'http://localhost:5000/users';
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          alert('L’utilisateur a été ajouté avec succès !');
        }
      })
      .catch((e) => {
        console.error(e);
        alert('Une erreur s’est produite lors de l’ajout de l’utilisateur.');
      });
  }

  return (
    <>
      <PersonalityLogo />
      <div className="FormUser">
        <h1>Créons votre compte !</h1>

        <form onSubmit={submitForm}>
          <fieldset>
            <legend>Vos informations</legend>
            <div className="form-data">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={onChange}
                value={user.name}
                placeholder="John Doe"
              />
            </div>

            <div className="form-data">
              <label htmlFor="username">Nom d&apos;utilisateur</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={onChange}
                value={user.username}
                placeholder="johndoe"
              />
            </div>

            <div className="form-data">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={onChange}
                value={user.email}
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
                value={user.password}
                placeholder="********"
              />
            </div>

            <div className="form-data">
              <label htmlFor="confirmPassword">Mot de passe</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={onChange}
                value={user.password}
                placeholder="********"
              />
            </div>

            <div className="form-data">
              <label htmlFor="phone">Téléphone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={onChange}
                value={user.phone}
                placeholder="0612345678"
              />
            </div>

            <hr />
            <input className="send-button" type="submit" value="Envoyer !" />
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Register;
