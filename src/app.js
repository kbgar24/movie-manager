import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import store from './store';
import Navbar from './containers/navbarContainer';
import MovieForm from './containers/movieFormContainer';
import Search from './components/search';
import Library from './containers/libraryContainer';

const NotFound = () => <div className='notFound'>404 Not Found</div>

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact={true} component={Library} />
          <Route path='/addFilm' exact={true} component={MovieForm} />
          <Route path='/advancedSearch' exact={true} render={(props) => <Library {...props} showSearch={true} />}/>
          <Route  component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
