import React from 'react';
import Header from "../../conponents/Header/index";
import './index.less'
export default class Detail extends React.Component {
    render() {
        return (
            <div className="detail">
                <div className="d-header">
                    <Header title="商品详情"></Header>
                    <i className="iconfont icon-fanhui"></i>
                </div>
            </div>
        )
    }
}