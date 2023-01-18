export const PAIR_CLICKED = 'forex-metrics/src/redux/pairDetails/PAIR_CLICKED';

const pairDetailsReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case PAIR_CLICKED:
      return payload;
    default:
      return state;
  }
};

export const pairClicked = (pair) => ({
  type: PAIR_CLICKED,
  payload: pair,
});

export default pairDetailsReducer;