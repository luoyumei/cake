import React from 'react';
import './index.less';
import {withRouter} from 'react-router-dom';
 class MHeader extends React.Component {
    go=()=>{
      this.props.history.goBack()
    };
    render() {
        return (
            <div className="m-header">
                <i onClick={this.go}
                   className="iconfont icon-fanhui"></i>
                <p>
                 {this.props.title}
                </p>
            </div>
        )
    }
}
export default withRouter(MHeader)