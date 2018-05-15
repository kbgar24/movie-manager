import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './mainPage';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={MainPage} />
      </Switch>
    </BrowserRouter>
  </div>
);


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
