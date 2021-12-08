import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import senators from './senators.json';


//render the App component here!
ReactDOM.render(<App senators={senators} />, document.getElementById('root'));
