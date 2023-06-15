import React, { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FPSStats from 'react-fps-stats';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@react-three/drei';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Suspense fallback={<p>Data is loading...</p>}> */}
    <FPSStats />
    <App />
    {/* </Suspense> */}
    {/* <Loader /> */}
  </React.StrictMode>
);
