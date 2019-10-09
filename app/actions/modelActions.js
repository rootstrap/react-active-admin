import { createAction } from 'redux-starter-kit';
import axios from 'axios';

export const indexSuccess = createAction('indexSuccess');
export const showSuccess = createAction('showSuccess');

export const index = model => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:3000/${model}`);
  dispatch(indexSuccess({ model, data }));
};

export const show = (model, id) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:3000/${model}/${id}`);
  dispatch(showSuccess({ model, data, id }));
};
