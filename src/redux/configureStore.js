import { configureStore, combineReducers } from '@reduxjs/toolkit';
import pairReducer from './pair/pair';
import pairDetailsReducer from './pairDetails/pairDetails';

const rootReducer = combineReducers({ pairReducer, pairDetailsReducer });

const store = configureStore({ reducer: rootReducer });

export default store;