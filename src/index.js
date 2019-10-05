import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// at topmost component, create the store. it could be in separate file also rather than index/ could be in app also

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import postReducer from './reducer/postReducer';
const storePost = createStore(postReducer);

// above we use storePost (createStore function) and it uses 'postReducer' a reducer function
// we also use Provider component fom react-redux

ReactDOM.render(
  <Provider store={storePost}>
    <App />{' '}
  </Provider>,
  document.getElementById('root')
);
