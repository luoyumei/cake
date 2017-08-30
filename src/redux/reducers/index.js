import home from './home';
import user from './user';
import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux';
export default combineReducers({
    home,
    user,
    router:routerReducer
})
