import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from './store';

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

// console.log('store: ', store)
window.store = store;


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
