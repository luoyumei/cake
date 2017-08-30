import React from 'react';
import ReactDom from 'react-dom';
import './common/index.less'
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from "./containers/Home/index";
import Shop from "./containers/Shop/index";
import Profile from "./containers/Profile/index";
import Warp from "./containers/Warp";
import Detail from "./containers/Detail/Detail";
import Reg from "./containers/Reg/Reg";
import Login from "./containers/Login/Login";
import store from './redux/store';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
let history=createHistory();
import PrivateRoute from './PrivateRoute';//验证，重定向
ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Warp>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <PrivateRoute path="/shop" component={Shop}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/detail" component={Detail}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </Warp>
        </ConnectedRouter>
    </Provider>
,document.querySelector('#app'));