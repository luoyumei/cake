import * as types from '../action-types';
let initState={
    sliders:[]
};

export default function (state=initState,action){
    switch (action.type){
        case types.GET_SLIDERS:
            return{
                ...state,sliders:action.sliders
            };
        default:
            return state;
    }
}