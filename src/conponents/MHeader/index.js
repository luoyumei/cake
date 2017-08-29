import React from 'react';
import './index.less'
export default class MHeader extends React.Component {
    render() {
        return (
            <div className="m-header">
                <i className="iconfont icon-fanhui"></i>
                <p>
                 {this.props.title}
                </p>
            </div>
        )
    }
}