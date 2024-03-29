import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux_store";

const elements = document.getElementById('root');
const root = createRoot(elements);

root.render(<Provider store={store}><App/></Provider>);