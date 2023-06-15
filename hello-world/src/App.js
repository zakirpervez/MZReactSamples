import React from "react";
import 'bulma/css/bulma.css';
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
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Personal Digital Assistance
                    </p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <PDACard
                                title="Alexa"
                                handle="@alexa99"
                                image={AlexaImage}
                                description="Alexa was created by Amazon and helps you buy things."
                            />
                        </div>
                        <div className="column is-3">
                            <PDACard
                                title="Cortana"
                                handle="@cortana32"
                                image={CortanaImage}
                                description="Cortana was created by Microsoft."
                            />
                        </div>
                        <div className="column is-3">
                            <PDACard
                                title="Siri"
                                handle="@siri01"
                                image={SiriImage}
                                description="Srir was created by Apple."
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;