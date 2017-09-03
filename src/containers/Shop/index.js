import React,{Component} from 'react';
import Header from "../../conponents/Header/index";
import './index.less';
import img from './img/111.jpg';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ScrollList from "../../conponents/ScrollList/index";
 class Shop extends Component{
     constructor(){
         super();
         this.state={
             price:0,
             ary:[]
         }
     }
     selected=(item)=>{
         this.state.ary=[];
         item.selected=!item.selected;
         let obj=this.props.shop;
         let ary=obj.filter(item=>item.selected);
         this.setState({ary});
         this.sum();
     };
     changeNum=(item,val)=>{
      item.num= item.num+val;
        if(item.num<=1){
            item.num=1;
        }
        this.sum();
     };
     sum=()=>{
         setTimeout(()=>{
             if(this.state.ary.length>0){
                 let sum= this.state.ary.reduce((prev,next)=>{
                     return prev+next.price.slice(2)*next.num
                 },0);
                 this.setState({price:sum});
             }else if(this.state.ary.length===0){
                 this.setState({price:0});
             }
         },1)
     };
    render(){
        let obj=this.props.shop;
        return (
            <div className="shop-all content"  >
                <Header title="购物车"/>
                {obj.length?
                    <ScrollList >
                        <ul className="shop-content">
                            <li className="shop-list">
                                {obj.map((item,index)=>(
                                    <ul key={index}>
                                        <li><input type="checkbox" value={item.selected}
                                                   onChange={()=>this.selected(item)}/></li>
                                        <li>
                                            <img src={item.url} alt=""/>
                                            <div className="info">
                                                <p>{item.info.slice(0,12)+'...'}</p>
                                                <p className="aaa">{item.price}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <button onClick={()=>this.changeNum(item,-1)}>-</button>
                                            <input className="num" type="text"
                                                  value={item.num}/>
                                            <button onClick={()=>this.changeNum(item,1)}>+</button>
                                        </li>
                                    </ul>
                                ))}
                            </li>
                        </ul>
                        <ul className="shop-bottom" >
                            <li>
                                <input type="checkbox"/><p>全选</p>
                            </li>
                            <li>
                                <span>合计:</span>
                                <input className="price" value={this.state.price} />
                            </li>
                            <li>
                                <button className="total">结算</button>
                            </li>
                        </ul>
                    </ScrollList>:
                    <div className="no">
                        <p className="p1">购物车快饿瘪了</p>
                        <p className="p2">快给我挑点好吃点</p>
                        <Link to='/'>
                            <button>去逛逛~~~</button>
                        </Link>
                    </div>
                }
            </div>
        )
    }
}
export default connect(
    state=>({...state}),
)(Shop)