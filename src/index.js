import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Lists from './Pages/Lists';
import MTC from './Pages/MTC';
import Bbw from './Pages/Bbw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bbw/>
  </React.StrictMode>
);