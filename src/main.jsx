import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar />
    <BrowserRouter basename="/bh-dev/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
