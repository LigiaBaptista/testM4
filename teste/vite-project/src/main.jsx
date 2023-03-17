import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Home from './pages/Home/Home'
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
