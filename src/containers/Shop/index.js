import React,{Component} from 'react';
import Header from "../../conponents/Header/index";
import './index.less';
import img from './img/111.jpg'
export default class Shop extends Component{
    render(){
        return (
            <div className="shop-all content">
                <Header title="购物车"/>
                <ul className="shop-content">
                    <li className="shop-list">
                        <ul>
                            <li><input type="checkbox" /></li>
                            <li>
                                <img src={img} alt=""/>
                                <div className="info">
                                    <p>蛋糕</p>
                                    <p className="aaa">999</p>
                                </div>
                            </li>
                            <li>
                                <button>-</button>
                                <button>0</button>
                                <button>+</button>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="shop-bottom" >
                    <li>
                        <input type="checkbox" /><p>全选</p>
                    </li>
                    <li>
                        <span>合计:</span>
                        <span>999</span>
                    </li>
                    <li>
                        <button className="total">结算</button>
                    </li>
                </ul>
            </div>
        )
    }
}