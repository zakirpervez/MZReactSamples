import bird from './assets/svg/bird.svg';
import cat from './assets/svg/cat.svg';
import cow from './assets/svg/cow.svg';
import dog from './assets/svg/dog.svg';
import gator from './assets/svg/gator.svg';
import heart from './assets/svg/heart.svg';
import horse from './assets/svg/horse.svg';
import {useState} from "react";

const svgMap = {
    bird, cat, cow, gator, horse, dog, heart
}



function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0)
    const handleClickEvent = () => {
        setClicks(clicks+1)
    };

    return <div onClick={handleClickEvent}>
        <img alt="animal" src={svgMap[type]}/>
        <img alt="heart" src={heart} style={{width: 10+10*clicks+'px'}}/>
    </div>
}

export default AnimalShow;