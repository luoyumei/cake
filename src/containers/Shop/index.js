import React,{Component} from 'react';
import {getSliders,getCakeList} from "../../api/home";
import Header from "../../conponents/Header/index";
export default class Shop extends Component{
    /*constructor(){
        super();
        this.state={sliders:[],list:[]}
    }
    componentDidMount(){
          getSliders().then(sliders=>{
             this.setState({sliders})
          });
          getCakeList(0,2,2).then(list=>{
              this.setState({list})
          })
    }*/
    render(){
        return (
            <div>
                <Header title="购物车"/>
                Shop
            </div>
        )
    }
}