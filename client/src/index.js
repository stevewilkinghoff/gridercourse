import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';



import App from './components/App';
import reducers from './reducers';  // import all reducers from reducers directory

import axios from 'axios'; // temp test code to test backend rouute for emailing
window.axios = axios;       // temp test code to test backend rouute for emailing


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    document.querySelector('#root'
    )
);