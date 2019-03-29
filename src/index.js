import React from 'react';
import ReactDOM from 'react-dom';


import {createStore} from 'redux';
import{Provider}from 'react-redux';
import reducertodo from './reducers'
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

const store=createStore(reducertodo)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
