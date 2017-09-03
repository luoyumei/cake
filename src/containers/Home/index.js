import React,{Component} from 'react';
import Header from "../../conponents/Header/index";
import './index.less';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ScrollList from "../../conponents/ScrollList/index";
import Swiper from "../../conponents/Swiper/index";
import * as action from '../../redux/actions/home';
import util from '../../common/util';
class Home extends Component{
    componentDidMount(){
        if(this.props.home.cake.cakeList.length==0){
            this.props.getCakeList();
        }
        this.props.getSlider();
        if(this.props.home.cake.cakeList.length>0){
            this.refs.scroll.scrollTop=util.get('homeLocation');
            this.forceUpdate();
        }
    }
    componentWillUnmount(){
        util.set('homeLocation',this.refs.scroll.scrollTop);
    }
    changeType=(e)=>{
        let  cur=e.target.getAttribute('type');
        if(cur==1){
            this.props.home.cake.curType=1;
            this.props.home.cake.offset=0;
            this.props.home.cake.limit=6;
            this.props.home.cake.cakeList=[];
        }else if( cur==2){
            this.props.home.cake.curType=2;
            this.props.home.cake.offset=0;
            this.props.home.cake.limit=6;
            this.props.home.cake.cakeList=[];
        }
        this.props.getCakeList();
    }
    loadMore=()=>{
        this.props.getCakeList();
    };
    render(){
        let {cakeList,curType,isLoading}=this.props.home.cake;
        return (
            <div className="home">
                <div className="s-header">
                    <Header/>
                    <input type="text" placeholder="搜索"/>
                </div>
                <div className="content" ref="scroll">
                    <ScrollList
                        element={this.refs.scroll}
                        isLoading={isLoading}
                        loadMore={this.loadMore}
                        cakeList={this.cakeList}>
                        <Swiper data={this.props.home.sliders}/>
                        <div className="product">
                            <div className="product-type" onClick={this.changeType}>
                                <span type="1" className={curType==1?'select':''}>最新商品</span>
                                <span type="2" className={curType==2?'select':''}>最热商品</span>
                            </div>
                            <ul className="cake-list" >
                                {cakeList.length>0?cakeList.map((item,index)=>(
                                    <Link  key={index} to={{pathname:'/detail',state:item}}>
                                        <li className="cake-list-item">
                                            <img src={item.url}/>
                                            <p className="info">{item.info}</p>
                                            <p className="price">{item.price}</p>
                                        </li>
                                    </Link>
                                )):<div>正在加载</div>}
                            </ul>
                        </div>
                    </ScrollList>
                    {this.props.home.cake.cakeList.length>this.props.home.cake.limit?
                        <p className="bottom">没有更多啦!!!</p>:
                        <p className="bottom">加载更多...</p>
                    }
                </div>
            </div>
        )
    }
}
export default connect(
    state=>({...state}),
    action
)(Home)
