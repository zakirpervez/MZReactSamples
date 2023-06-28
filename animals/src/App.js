import AnimalShow from "./AnimalShow";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0)
    return <div>
        <div><button onClick={() => {
            setCount(count+1)
        }}>Add Animal</button>
        <div>Number of animal is {count}</div>
        </div>
    </div>
}

export default App;