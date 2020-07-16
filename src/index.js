import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './modules/ScrollToTop'

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


render((
  <Router basename={process.env.PUBLIC_URL}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
