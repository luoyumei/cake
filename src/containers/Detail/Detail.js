import React from 'react';

import {Link} from 'react-router-dom'
import './index.less'
import ScrollList from "../../conponents/ScrollList/index";
import MHeader from "../../conponents/MHeader/index";
export default class Detail extends React.Component {
    render() {
        return (
            <div className="detail">
                <div className="d-header">
                    <MHeader title="商品详情"></MHeader>
                </div>
                <ScrollList>1111</ScrollList>
                <div className="d-footer">
                    <button className="car">加入购物车</button>
                    <button className="buy">立即购买</button>
                </div>
            </div>
        )
    }
}