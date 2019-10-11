import { createAction } from 'redux-pro-kit';
import axios from 'axios';

export const indexSuccess = createAction('indexSuccess');
export const showSuccess = createAction('showSuccess');
export const updateIndex = createAction('updateIndex');
export const removeFromIndex = createAction('removeFromIndex');

export const index = model => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:3000/${model}`);
  dispatch(indexSuccess({ model, data }));
};

export const show = (model, id) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:3000/${model}/${id}`);
  dispatch(showSuccess({ model, data, id }));
};

export const create = (model, object) => async (dispatch) => {
  const { data } = await axios.post(`http://localhost:3000/${model}`, object);
  dispatch(updateIndex({ model, data }));
};

export const update = (model, object, id) => async (dispatch) => {
  const { data } = await axios.put(`http://localhost:3000/${model}/${id}`, object);
  dispatch(updateIndex({ model, data }));
};

export const destroy = (model, id) => async (dispatch) => {
  await axios.delete(`http://localhost:3000/${model}/${id}`);
  dispatch(removeFromIndex({ model, id }));
};
