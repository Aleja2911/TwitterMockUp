
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  BrowserRouter } from "react-router-dom";



const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  rootElement
);

{/*ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,

  document.getElementById('root')
);*/}


