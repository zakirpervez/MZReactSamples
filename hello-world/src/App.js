import React from "react";
import PDACard from "./PDACard";

import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';
import CortanaImage from './images/cortana.png';

console.log(AlexaImage);
console.log(SiriImage);
console.log(CortanaImage);

function App() {
    return (
        <div>
            <div><h3>Personal Digital Assistance</h3></div>
            <div>
                <PDACard title="Alexa" handle="@alexa99" image={AlexaImage}/>
                <PDACard title="Cortana" handle="@cortana32" image={CortanaImage}/>
                <PDACard title="Siri" handle="@siri01" image={SiriImage}/>
            </div>
        </div>
    );
}
export default App;