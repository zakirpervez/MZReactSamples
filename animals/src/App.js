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

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return <div>
        <div><button onClick={handleClickEvent}>Add Animal</button>
        <div>{ renderedAnimals }</div>
        </div>
    </div>
}

export default App;