import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from './store';

import MainPage from './mainPage';
import Navbar from './components/navbar';
import MovieForm from './containers/movieFormContainer';
import Search from './components/search';
import Library from './containers/libraryContainer';

const NotFound = () => <div>Not Found</div>

const App = () => (
  <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path='/' exact={true} component={Library} />
            <Route path='/addFilm' exact={true} component={MovieForm} />
            <Route path='/advancedSearch' exact={true} component={Search} />
            <Route  component={NotFound} />
          </Switch>
        </div>
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
