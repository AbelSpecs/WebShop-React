import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WebshopApp } from './WebshopApp';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */



ReactDOM.render(
  <WebshopApp className="principal"/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
