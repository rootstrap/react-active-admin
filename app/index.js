import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux'
import data from 'data';
import App from './components/App';
import reducer from './reducers';

const store = createStore(
  reducer,
  {},
  applyMiddleware(thunkMiddleware),
);

ReactDOM.render(<Provider store={store}><App data={data} /></Provider>, document.getElementById('app'));
