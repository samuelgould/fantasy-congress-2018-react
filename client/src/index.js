import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './reducers/candidates'

import './index.css';
import App from './components/App';

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),  applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>  
		<App />
	</Provider>, 
  document.getElementById('root')
);
