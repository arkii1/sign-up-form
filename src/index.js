import React from 'react';
import './index.css';
import App from './App';
import ReactDOMClient from 'react-dom/client'
import './meyerreset.css'

const appElement = document.createElement('div');
appElement.className = 'root';
document.body.appendChild(appElement);
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);