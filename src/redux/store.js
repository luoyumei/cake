import reducers from "./reducers";
import {createStore,applyMiddleware} from 'redux';

import reduxThunk from 'redux-thunk';

import {routerMiddleware}  from 'react-router-redux';
import createHistory  from 'history/createHashHistory';
let history=createHistory();

export default createStore(reducers,applyMiddleware(reduxThunk,routerMiddleware(history)));
