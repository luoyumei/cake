import React from 'react';
import './index.less';
import MHeader from "../../conponents/MHeader/index";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user'
 class Login extends React.Component {
     login=()=>{
        let username=this.refs.name.value;
        let password=this.refs.password.value;
        this.props.login({username,password});
       //this.props.history.push('/profile');
     };
    render() {
        return (
            <div className="login">
              <MHeader title="登录"></MHeader>
                <div className="err">{this.props.user.err}</div>
              <ul>
                <li>
                    <p>用户名</p>
                    <input type="text" ref="name"/>
                </li>
                <li>
                    <p>密  码</p>
                    <input type="text" ref="password"/>
                </li>
                <li>
                    <a><button onClick={this.login}>登 录</button></a>
                </li>
                <li className="last">
                    <Link to='/reg'>莫有账号，前去注册</Link>
                </li>
              </ul>
            </div>
        )
    }
}
export default connect(
    state=>({...state}),
    action
)(Login)