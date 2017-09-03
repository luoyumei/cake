import React from 'react';
import '../../common/index.less'
export default class ScrollList extends React.Component {
    constructor(){
        super();
        this.state={flag:false,top:0}
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.element && !this.state.flag){
            nextProps.element.addEventListener('scroll',()=>{
                clearTimeout(this.timer);
                this.timer=setTimeout(()=>{
                    let {scrollTop,offsetHeight,scrollHeight}=nextProps.element;
                    this.setState({top:scrollTop});
                    if(scrollTop+offsetHeight+5>scrollHeight && this.props.cakeList!=[] && !this.props.isLoading){
                        this.props.loadMore();
                    }
                },100)
            });
            this.setState({flag:true})
        }
    }
    render() {
        return (
            <div>
                {this.props.children}
                {this.state.top>0?<p className="font" ref="font" onClick={()=>{
                    this.props.element.scrollTop=0;
                    this.setState({top:0});
                }}>
                    <i className="iconfont icon-iconfontfanhuidingbu"></i>
                </p>:null}

            </div>
        )
    }
}