import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const elements = document.getElementById('root');
const root = createRoot(elements);

root.render(<App />);