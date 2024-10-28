import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Removed the Router import here

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Removed Router wrapping */}
  </React.StrictMode>,
  document.getElementById('root')
);
