import Button from "./mcomponents/Button";
import {GoBell, GoCode} from "react-icons/go";

function App() {
    const handleClick = () => {
        console.log("Button clicked");
    };
  return (
    <div className="App">
        <div ><Button primary={true} rounded={true} onClick={handleClick} className="mb-5"> <GoBell />Primary Button</Button></div>
        <div><Button  secondary={true} onMouseEnter={handleClick} className="mb-5"><GoCode />Secondary Button</Button></div>
        <div ><Button success={true} onMouseLeave={handleClick} className="mb-5">Success Button</Button></div>
        <div ><Button warning={true} className="mb-5">Warning Button</Button></div>
        <div ><Button danger={true} className="mb-5">Danger Button</Button></div>
        <div ><Button rounded={true} className="mb-5">Rounded Button</Button></div>
        <div ><Button  primary={true} outline={true} className="mb-5">Outline Button</Button></div>
    </div>
  );
}

export default App;
