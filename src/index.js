import React from 'react';
import ReactDOM from 'react-dom';
import './lib/css/index.css';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from "jquery";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
