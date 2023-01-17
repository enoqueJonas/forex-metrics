import { createAsyncThunk } from '@reduxjs/toolkit';
import { PAIRS_RETRIEVED } from './pair';

const getPairs = createAsyncThunk(PAIRS_RETRIEVED, async () => {
  const res = await fetch('https://financialmodelingprep.com/api/v3/fx?apikey=53312c5c709560653fa973056aa4ea4a', {
    method: 'GET',
    mode: 'cors',
  }).then((response) => response.json());
  return res;
});

export default getPairs;