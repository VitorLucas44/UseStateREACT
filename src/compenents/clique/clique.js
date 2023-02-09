import React, { useState } from "react";

function Clique() {
let [nombre, setCount] = useState(0);

return (
    <div>
        <button onClick={() => setCount(nombre + 1)}>
            Clique ici pour incrémenter le compteur
        </button>
        <p>Le compteur est à : {nombre}</p>
    </div>
    );
}

export default Clique;
