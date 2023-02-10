import React, { useState } from 'react';

const Connection = () => {
    let [LesDonnées, setLesDonnees] = useState({
    username: '',
    email: '',
    password: ''
});

let [errorMessage, setMsgErreur] = useState('');
let [submitted, setSoumettre] = useState(false);

const handleChange = event => {
    setLesDonnees({...LesDonnées,
    [event.target.name]: event.target.value
    });
};

const GererSoumettre = event => {
    event.preventDefault();

    let hasErrors = false;

    if (!LesDonnées.username) {
        hasErrors = true;
        setMsgErreur('Le nom d\'utilisateur est requis');
    } else if (!LesDonnées.email) {
        hasErrors = true;
        setMsgErreur('L\'adresse email est requise');
    } else if (!LesDonnées.password) {
        hasErrors = true;
        setMsgErreur('Le mot de passe est requis');
    }

    if (!hasErrors) {
        setMsgErreur('');
        setSoumettre(true);
    }
};

return (
    <div>
        {submitted ? (
        <div>
            Bienvenue, {LesDonnées.username}! Vous avez été inscrit avec succès.
        </div>) : (
        <form onSubmit={GererSoumettre}>
            <div>
                <label htmlFor="username">Nom d'utilisateur :</label>
                <input
                type="text"
                name="username"
                value={LesDonnées.username}
                onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="email">Adresse email :</label>
                <input
                type="email"
                name="email"
                value={LesDonnées.email}
                onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="password">Mot de passe :</label>
                <input
                type="password"
                name="password"
                value={LesDonnées.password}
                onChange={handleChange}
                />
            </div>

            <div>
                {errorMessage && <div>{errorMessage}</div>}
                <button type="submit">S'inscrire</button>
            </div>
            </form>
        )}
        </div>
    );
};

export default Connection;
