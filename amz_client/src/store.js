import { configureStore } from '@reduxjs/toolkit'

import {applyMiddleware } from 'redux';
import getProductsreducer from "./Components/redux/reducers/productsRuducers.js"

import thunk from 'redux-thunk';
// import  Reducer from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import rootreducers from './Components/redux/reducers/main.js';

const middleware = [thunk]
const store = configureStore(
      // {rootreducers},
    {
      reducer:{
        productsKey:getProductsreducer
      }
    },
    
    
  composeWithDevTools(applyMiddleware([...middleware]))

);

export default store;
