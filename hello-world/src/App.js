import React from "react";
import PDACard from "./PDACard";

function App() {
    return (
        <div>
            <div><h3>Personal Digital Assistance</h3></div>
            <div>
                <PDACard title="Alexa" handle="@alexa99"/>
                <PDACard title="Cortana" handle="@cortana32"/>
                <PDACard title="Siri" handle="@siri01"/>
            </div>
        </div>
    );
}
export default App;