import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FPSStats from 'react-fps-stats';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FPSStats />
    <App />
  </React.StrictMode>
);
