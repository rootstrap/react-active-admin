/* eslint no-param-reassign: 0 */
import { createReducer } from 'redux-starter-kit';

import data from 'data';
import { indexSuccess, showSuccess } from '../actions/modelActions';

const initialState = Object.keys(data).reduce(
  (acc, key) => ({ [key]: {}, ...acc }),
  {},
);

export default createReducer(
  initialState,
  {
    [indexSuccess]: (state, { payload }) => { state[payload.model].index = payload.data; },
    [showSuccess]: (state, { payload }) => { state[payload.model].current = payload.data; },
  },
);
