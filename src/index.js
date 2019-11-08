import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware,  createStore } from 'redux';
import { Provider } from 'react-redux';

import {reducer} from './reducers/index.js';
import logger  from "redux-logger";


import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';


const store= createStore(reducer, applyMiddleware(logger));
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
