import * as types from '../action-types';
import {getSliders,getCakeLists} from '../../api/home';
export const getSlider=()=>(dispatch)=>{
    getSliders().then(sliders=>{
        dispatch({
            type:types.GET_SLIDERS,
            sliders
        })
    })
}

