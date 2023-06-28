import AnimalShow from "./AnimalShow";
import { useState } from "react";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClickEvent = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    return <div>
        <div><button onClick={handleClickEvent}>Add Animal</button>
        <div>Number of animal is {animals}</div>
        </div>
    </div>
}

export default App;