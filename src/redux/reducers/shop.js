import * as types from '../action-types';
let initState=[];
    /*list:[]*/
   /* shopInfo:{
       url:'',
        price:'',
        info:''
    }*/
export default function (state=initState,action) {
    switch (action.type){
        case types.GO_TO_BUY:
            return  [...state,action.shopInfo]
    }
    return state
}