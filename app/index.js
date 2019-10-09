import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from 'redux-starter-kit';
import { Provider } from 'react-redux'
import data from 'data';
import App from './components/App';

import reducer from './reducers';
const store = configureStore({ reducer });

ReactDOM.render(<Provider store={store}><App models={data} /></Provider>, document.getElementById('app'));
