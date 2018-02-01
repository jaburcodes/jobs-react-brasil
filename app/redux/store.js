import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './reducers/home-reducer';

export let store = createStore(
  homeReducer,
  applyMiddleware(thunk)
);

export let dispatch = store.dispatch
