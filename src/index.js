import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter basename="/movies">
        <div>
            <Route exact path="/">
                <Redirect to="/popular"/>
            </Route>
            <Route path="/:current_menu" component={App}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
