import React from 'react';
import ReactDom from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from "./containers/Home/index";
import Shop from "./containers/Shop/index";
import Profile from "./containers/Profile/index";
import Warp from "./containers/Warp";
import './common/index.less'
import Detail from "./containers/Detail/Detail";
ReactDom.render(
<Router>
    <Warp>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/detail" component={Detail}/>
        </Switch>
    </Warp>
</Router>,document.querySelector('#app'));