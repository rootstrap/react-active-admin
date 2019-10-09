import { createReducer } from 'redux-starter-kit';
import { increment, decrement } from '../actions/counterActions';

export default createReducer(0, {
  [increment]: state => state + 1,
  [decrement]: state => state - 1,
});
