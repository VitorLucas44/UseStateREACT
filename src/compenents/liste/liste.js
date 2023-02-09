import React, { useState } from "react";

function TacheListe() {
    let [tasks, setTasks] = useState([]);
    let [newTask, setNewTask] = useState("");

    let Submit = (event) => {
        event.preventDefault();
        setTasks([...tasks, newTask]);
        setNewTask("");
    };

    return (
        <div>
        <h3>Liste de taches</h3>
        <ul>
            {tasks.map((task, index) => (
            <li key={index}>{task}</li>
            ))}
        </ul>
        <form onSubmit={Submit}>
            <input
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            />
            <button type="submit">Ajouter une tache</button>
        </form>
        </div>
    );
}

export default TacheListe;
