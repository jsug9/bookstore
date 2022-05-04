import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const middleware = applyMiddleware(thunk, logger);
const store = configureStore({ reducer: rootReducer }, middleware);

export default store;
