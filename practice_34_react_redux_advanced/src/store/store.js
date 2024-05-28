import {combineReducers, createStore} from 'redux'
import { counterReducer } from './reducers/counterReducer';
import { productsReducer } from './reducers/productsReducer';

const store = createStore( combineReducers(
  {
    counter: counterReducer,
    products: productsReducer
  }
) );

export default store;