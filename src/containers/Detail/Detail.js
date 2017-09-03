import React from 'react';
import Header from "../../conponents/Header/index";
import {Link} from 'react-router-dom'
import './index.less'
import ScrollList from "../../conponents/ScrollList/index";
import util from '../../common/util';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/shop'
 class Detail extends React.Component {
    componentWillMount(){
        if(!this.props.location.state){
            this.props.history.push('/')
        }
    }
     goToBuy=()=>{
         let obj=this.props.location.state;
         obj.selected=false;
         obj.num=1;
         let ary=this.props.shop;
         if(ary.length>0){
             if(ary.filter(item=>item.url==obj.url).length>0){
                // console.log(ary.find(item => item.url !== obj.url));
                 return;
             }else {
                 this.props.buy(obj);//redux中action触发的方法
             }
         }else{
             this.props.buy(obj);//redux中action触发的方法
         }
     };
    render() {
       let obj=this.props.location.state;
        let {url,info,price}=this.props.location.state||{};
        return (
            <div className="detail">
                <div className="d-header">
                    <Header title="商品详情"></Header>
                    <Link to="/">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                </div>
                <ScrollList>
                    <div className="content">
                        <img src={url} alt=""/>
                        <p className="info">【新品上市】：{info}</p>
                        <p className="price">{price}</p>
                        <div className="detail-content">
                            <p>运费:免运费</p>
                            <p>库存:999</p>
                        </div>
                        <p className="product">产品介绍:</p>
                        <div className="long">浏览更多</div>
                    </div>
                </ScrollList>
                <div className="d-footer">
                    <button className="car">加入购物车</button>
                        <Link to='/shop' >
                            <button className="buy" onClick={this.goToBuy}>立即购买</button>
                        </Link>
                </div>
            </div>
    )
    }
    }
export default connect(
    state=>({...state}),
    action
)(Detail)