import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowswerRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStrore, applyMiddlewear } from 'redux';
import promiseMiddlewear from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './redux/reducers';

const createStroreWithMiddlewear = applyMiddlewear(promiseMiddlewear, ReduxThunk)(createStrore);


ReactDOM.render(
    <Provider store={createStroreWithMiddlewear(Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <App />
    </Provider>
    , document.getElementById('root'));

