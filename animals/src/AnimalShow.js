import bird from './assets/svg/bird.svg';
import cat from './assets/svg/cat.svg';
import cow from './assets/svg/cow.svg';
import dog from './assets/svg/dog.svg';
import gator from './assets/svg/gator.svg';
import heart from './assets/svg/heart.svg';
import horse from './assets/svg/horse.svg';
import {useState} from "react";
import './AnimalShow.css';

const svgMap = {
    bird, cat, cow, gator, horse, dog, heart
}

function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0);
    const [size, setSize] = useState(10);
    const animalSize = 200;

    const handleClickEvent = () => {
        if (size < animalSize) {
            setSize(10+10*clicks);
        }
        setClicks(clicks+1);
    };

    return <div onClick={handleClickEvent} className="animal-show">
        <img alt="animal" src={svgMap[type]} style={{ height: animalSize+'px' }}/>
        <img alt="heart" className="heart" src={heart} style={{width: size+'px'}}/>
    </div>
}

export default AnimalShow;