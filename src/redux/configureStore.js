import { configureStore } from '@reduxjs/toolkit';
import pairReducer from './pair/pair';

const store = configureStore({ reducer: pairReducer });

export default store;