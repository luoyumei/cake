import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';//引入轮播图插件
let gif=require('../../common/timg.gif')
import './index.less';
export default class Swiper extends Component {
    constructor(){
        super();
        this.state={index:0}//焦点切换的索引
    }
    render() {
        let opts={
            continuous: true,
            callback:(index)=>{
                this.setState({index:index})
            },
            auto:2000
        };
        return (
            <div className="swiper">
                {this.props.data.length>0?<ReactSwipe className="carousel" swipeOptions={opts}>
                    {this.props.data.map((item,index)=>(
                        <div key={index}>
                            <img src={item} />
                        </div>
                    ))}
                </ReactSwipe>:<div><img src={gif}/></div>}
                <div className="dots">
                    {this.props.data.map((item,index)=>(
                        <span key={index} className={index==this.state.index?'active':''}></span>
                    ))}
                </div>
            </div>
        );
    }
}

