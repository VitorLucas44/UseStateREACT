import React, { useState } from 'react';

const Convertisseur = () => {
let [montant, SetQuantite] = useState(0);
let [frommonnaie, setFromMonnaie] = useState('EUR');
let [tomonnaie, setToMonnaie] = useState('USD');
let [taux, setTaux] = useState(1.2);
let [montantconvertie, setMontantconverti] = useState(0);

const GererQuantite = (event) => {
    SetQuantite(event.target.value);
};

const ChangementMonnaie = (event) => {
    setFromMonnaie(event.target.value);
};

const ChangementDevise = (event) => {
    setToMonnaie(event.target.value);
};

const ChangementTaux = (event) => {
    setTaux(event.target.value);
};

const Convertir = () => {
    setMontantconverti(montant * taux);
};

    return (
        <div>
        <input type="number" value={montant} onChange={GererQuantite} />
        <select value={frommonnaie} onChange={ChangementMonnaie}>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
        </select>
        <select value={tomonnaie} onChange={ChangementDevise}>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
        </select>
        <input type="number" value={taux} onChange={ChangementTaux} />
        <button onClick={Convertir}>Convertir</button>
        <p>{montantconvertie}</p>
        </div>
    );
};

export default Convertisseur;
