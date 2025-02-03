import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // div root

/* podemos renderizar varios componentes
 root.render([
 <App />, 
 <App />, 
 <App />
]); //renderizar la aplicacion */

root.render(<App />); //renderizar la aplicacion
