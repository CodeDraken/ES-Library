import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';

import App from './components/App';
// import Home from './components/Home';

import './css/main.css';


ReactDOM.render(
  <Router>
    <App/>
  </Router>,

  document.getElementById('root')
);
