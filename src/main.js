import React from 'react';
import ReactDom from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from "./containers/Home/index";
import Lesson from "./containers/Lesson/index";
import Profile from "./containers/Profile/index";
ReactDom.render(
<Router>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/lesson" component={Lesson}/>
        <Route path="/profile" component={Profile}/>
    </Switch>
</Router>,document.querySelector('#app'));