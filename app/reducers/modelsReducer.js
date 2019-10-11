/* eslint no-param-reassign: 0 */
import { createReducer } from 'redux-pro-kit';

import info from 'data';
import { indexSuccess, showSuccess, updateIndex, removeFromIndex } from '../actions/modelActions';

const initialState = Object.keys(info).reduce(
  (acc, key) => ({ [key]: {}, ...acc }),
  {},
);

export default createReducer(
  initialState,
  {
    [indexSuccess]: (state, { model, data }) => { state[model].index = data; },
    [showSuccess]: (state, { model, data }) => { state[model].current = data; },
    [updateIndex]: (state, { model, data }) => { state[model].index.unshift(data); },
    [removeFromIndex]: (state, { model, id }) => {
      state[model].index.filter(
        item => item.id !== id,
      );
    },
  },
);
