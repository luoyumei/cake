import React,{Component} from 'react';
import {getSliders,getCakeList} from "../../api/home";
export default class Lesson extends Component{
    constructor(){
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
    }
    render(){
        return (
            <div>
               1111
            </div>
        )
    }
}