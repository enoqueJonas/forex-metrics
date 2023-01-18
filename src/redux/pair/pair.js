export const PAIRS_RETRIEVED = 'forex-metrics/src/redux/pair/PAIRS_RETRIEVED';

const pairReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case `${PAIRS_RETRIEVED}/fulfilled`:
    //   console.log(payload);
      return payload.map((pair) => {
        const {
          ticker, bid, ask, open, low, high,
        } = pair;
        return {
          ticker,
          bid,
          ask,
          open,
          low,
          high,
        };
      });
    default:
      return state;
  }
};

export default pairReducer;