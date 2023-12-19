import CarForm from "./components /car_form";
import CarSearch from "./components /car_search";
import CarList from "./components /car_list";
import CarValue from "./components /car_value";

function App() {
    return <div>
        <div><CarForm /></div>
        <div><CarSearch /></div>
        <div><CarList /></div>
        <div><CarValue /></div>
    </div>
}

export default App;