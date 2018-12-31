import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {robot} from './robots.js';

import CardComponent from './CardComponent' ;
import * as serviceWorker from './serviceWorker';
import 'tachyons' ;
console.log(robot) ;
ReactDOM.render( <CardComponent robots = {robot} /> ,document.getElementById('root'));


serviceWorker.unregister();
