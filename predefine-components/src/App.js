import Route from "./mcomponents/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import Sidebar from "./mcomponents/Sidebar";

function App() {
    return <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar />
        <div className="col-span-5">
            <Route path="/"><DropdownPage /></Route>
            <Route path="/accordion"><AccordionPage /></Route>
            <Route path="/button"><ButtonPage /></Route>
        </div>
    </div>
}

export default App;
