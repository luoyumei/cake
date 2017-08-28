
import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.less';
import {CSSTransition,TransitionGroup} from 'react-transition-group'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="top">
                    <NavLink to="/"  exact activeClassName="selected">
                        <i className="iconfont icon-shouye"></i>
                    </NavLink>
                    <NavLink to="/shop" activeClassName="selected">
                        <i className="iconfont icon-weibiaoti1"></i>
                    </NavLink>
                    <NavLink to="/profile" activeClassName="selected">
                        <i className="iconfont icon-grzx"></i>
                    </NavLink>
                </div>
                <div className="but">
                    <a>
                        <i className="iconfont icon-shouye2"></i>
                    </a>
                    <a>
                        <i className="iconfont icon-gouwuche2"></i>
                    </a>
                    <a>
                        <i className="iconfont icon-fcstubiao18"></i>
                    </a>
                </div>
            </div>
        )
    }
}