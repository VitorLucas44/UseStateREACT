import React, { useState } from 'react';

function Devinette() {
  const [nombreadeviner, setNombreADeviner] = useState(Math.floor(Math.random() * 100) + 1);
    let [jedevine, SetDEvine] = useState('');
    let [feedback, setFeedback] = useState('');

        const CompareDEvine = (e) => {
        e.preventDefault();

        if (jedevine < nombreadeviner) {
        setFeedback('Le nombre à deviner est plus grand');
        } else if (jedevine > nombreadeviner) {
        setFeedback('Le nombre à deviner est plus petit');
        } else {
        setFeedback('BRAVO, vous avez troyver le nombre !');
        }
    };

    return (
        <div>
        <form onSubmit={CompareDEvine}>
            <input
            type="number"
            value={jedevine}
            onChange={(e) => SetDEvine(e.target.value)}
            />
            <button type="submit">Deviner</button>
        </form>
        <p>{feedback}</p>
        </div>
    );
}

export default Devinette;
