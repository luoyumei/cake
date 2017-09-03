import React, {Component} from 'react';
import Header from "../../conponents/Header/index";
import './index.less';
import img1 from './login.jpg';
import img2 from './out.jpg';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user';
import {Link} from 'react-router-dom';
import util from '../../common/util'
 class Profile extends Component {
     componentDidMount(){
         this.props.auth()
     }
     handleClick=()=>{
         sessionStorage.clear();
         this.props.user.userInfo.username='';
         this.forceUpdate();
        this.props.shop=[];
     };
    render() {
        return (
            <div className="user-all">
                <Header title='个人中心'/>
                {this.props.user.userInfo.username?
                <div>
                    <div className="user-card">
                        <img src={img1} className=" avatar"/>
                        <span className="name">{this.props.user.userInfo.username}</span>
                    </div>
                    <ul className="user-content">
                        <li>
                            <i className="iconfont icon-ku"></i>
                            <span>待付款</span>
                        </li>
                        <li>
                            <i className="iconfont icon-xiaolian"></i>
                            <span>已完成</span>
                        </li>
                        <li className="aa">
                            <i className="iconfont icon-quanbudingdan"></i>
                            <span>全部订单</span>
                        </li>
                    </ul>
                </div>:
                    <div className="user-card">
                        <img src={img2} className=" avatar" style={{border:"1px solid silver"}}/>
                        <Link to="/login" className="username"><button>登录</button></Link>
                    </div>}

                {this.props.user.userInfo.username?
                    <div className="user-button">
                         <button onClick={()=>this.props.del()}>退出当前账户</button>
                    </div>:null}
            </div>
        )
    }
}
export default connect(
    state=>({...state}),
    action
)(Profile)