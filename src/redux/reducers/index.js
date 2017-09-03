import home from './home';
import user from './user';
import shop from './shop';
import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux';
export default combineReducers({
    home,
    user,
    shop,
    router:routerReducer
})
