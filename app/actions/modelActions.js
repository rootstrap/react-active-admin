import { createAction } from 'redux-starter-kit';
import axios from 'axios';

export const indexSuccess = createAction('indexSuccess');

export const index = model => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:3000/${model}`);
  dispatch(indexSuccess({ model, data }));
};
