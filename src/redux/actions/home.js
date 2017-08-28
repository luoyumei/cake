import * as types from '../action-types';
import {getSliders,getCakeList} from '../../api/home';
export const getSlider=()=>(dispatch)=>{
    getSliders().then(sliders=>{
        dispatch({
            type:types.GET_SLIDERS,
            sliders
        })
    })
}

