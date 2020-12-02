import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Home } from './Home';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path = "/" component = {App} />
            <Route path = "home" component = {Home} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));
