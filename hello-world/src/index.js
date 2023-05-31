// Steps to load react

//Step 1 => Import React and ReactDOM libraries.
//Step 2 => Get a reference to the div with ID root.
//Step 3 > TEll React to take control of that element.
//Step 4 => Create component.
//Step 5 => Show the component on the screen.

/** Step 1 => Imports */
import React from "react"; // Library defines what a component is and how multiple components works together.
import * as ReactDOM from 'react-dom/client'; // Library that knows hot get a component to show up in the browser.
import App from './App';

/** Step 2 => Get the div id from publilc/index.htm */
const element = document.getElementById('root');

/** Step 3 => Create react controller */
const root = ReactDOM.createRoot(element);

/** Step 4 => Create react component*/
//Note: This step moved inside the App.js
// function App() {
//     return (
//         <div>
//             <textarea
//                 readOnly
//                 spellCheck
//                 maxLength={30}
//                 style={{backgroundColor: "greenyellow", textDecoration: 'underline black'}}
//             />
//         </div>
//     );
// }

/** Step 5 => Render it */
root.render(<App />);