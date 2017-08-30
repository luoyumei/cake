import * as types from '../action-types';
import {getSliders,getCakeLists} from '../../api/home';
export const getSlider=()=>(dispatch)=>{
    getSliders().then(sliders=>{
        dispatch({
            type:types.GET_SLIDERS,
            sliders
        })
    })
};

export const getCakeList=()=>(dispatch,getState)=>{
    let {cake:{curType,offset,limit}}=getState().home;
    getCakeLists(curType,offset,limit).then(cakeList=>{
        dispatch({
            type:types.GET_CAKE_LIST,
            cakeList,
            curType
        })
    })
}
