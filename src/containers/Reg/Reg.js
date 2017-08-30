import React from 'react';
import './index.less';
import MHeader from "../../conponents/MHeader/index";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user';
 class Reg extends React.Component {
     reg=()=>{
         let username=this.refs.name.value;
         let password=this.refs.password.value;
         this.props.reg({username,password});
     };
    render() {
        return (
            <div className="reg">
              <MHeader title="注册"></MHeader>
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
                    <button onClick={this.reg}>注 册</button>
                </li>
              </ul>
            </div>
        )
    }
}
export default connect(
    state=>({...state}),
    action
)(Reg)