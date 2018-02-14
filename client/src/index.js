import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import { reducer as candidatesReducer } from './reducers/candidates';
import { reducer as userReducer } from './reducers/user';

import './index.css';
import App from './components/App';

export const store = createStore(
  combineReducers({
    candidates: candidatesReducer,
    user: userReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
		  <App />
    </Router>
	</Provider>, 
  document.getElementById('root')
);
