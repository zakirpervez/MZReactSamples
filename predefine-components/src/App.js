import Button from "./mcomponents/Button";
import {GoBell, GoCode} from "react-icons/go";

function App() {
  return (
    <div className="App">
        <div style={{ margin: 10}}><Button primary={true} rounded={true}> <GoBell />Primary Button</Button></div>
        <div style={{ margin: 10}}><Button  secondary={true}><GoCode />Secondary Button</Button></div>
        <div style={{ margin: 10}}><Button success={true}>Success Button</Button></div>
        <div style={{ margin: 10}}><Button warning={true}>Warning Button</Button></div>
        <div style={{ margin: 10}}><Button danger={true}>Danger Button</Button></div>
        <div style={{ margin: 10}}><Button rounded={true}>Rounded Button</Button></div>
        <div style={{ margin: 10}}><Button  primary={true} outline={true}>Outline Button</Button></div>
    </div>
  );
}

export default App;
