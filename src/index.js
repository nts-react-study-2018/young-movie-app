import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/movies/:current_menu" component={App} />
      <Redirect to="/movies/popular" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
