import {combineReducers, createStore} from 'redux'
import { counterReducer } from './reducers/counterReducer';
import { productsReducer } from './reducers/productsReducer';
import { filterReducer } from './reducers/filterReducer';

const store = createStore( combineReducers(
  {
    counter: counterReducer,
    products: productsReducer,
    filter: filterReducer
  }
) );

export default store;