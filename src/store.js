import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import movieReducer from './reducers/movieReducer';

export default createStore(
  movieReducer,
  applyMiddleware(
    thunk,
    createLogger(),
  )
);