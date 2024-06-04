import {applyMiddleware, combineReducers, createStore} from 'redux'
import { counterReducer } from './reducers/counterReducer';
import { productsReducer } from './reducers/productsReducer';
import { filterReducer } from './reducers/filterReducer';
import {thunk} from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer';

const store = createStore( combineReducers(
  {
    counter: counterReducer,
    products: productsReducer,
    filter: filterReducer,
    categories: categoriesReducer
  }
), applyMiddleware(thunk) );

export default store;