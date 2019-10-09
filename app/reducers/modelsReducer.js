/* eslint no-param-reassign: 0 */
import { createReducer } from 'redux-starter-kit';

import { indexSuccess } from '../actions/modelActions';


export default createReducer(
  {},
  {
    [indexSuccess]: (state, { payload }) => { state[payload.model] = payload.data; },
  },
);
