import React,{Component} from 'react';
import Header from "../../conponents/Header/index";
import './index.less';
import {connect} from 'react-redux';
import ScrollList from "../../conponents/ScrollList/index";
import Swiper from "../../conponents/Swiper/index";
import * as action from '../../redux/actions/home';
 class Home extends Component{
     componentDidMount(){
         this.props.getSlider();

     }
    render(){
        return (
            <div className="home">
                <div className="s-header">
                    <Header title=''/>
                    <input type="text" placeholder="搜索"/>
                </div>
                <div className="content">
                    <ScrollList>
                        <Swiper data={this.props.home.sliders}/>
                    </ScrollList>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>({...state}),
    action
)(Home)