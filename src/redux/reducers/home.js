import * as types from '../action-types';
let initState={
    sliders:[],
    cake:{
        curType:1,
        offset:0,
        limit:6,
        cakeList:[]
    }
};
export default function (state=initState,action){
    switch (action.type){
        case types.GET_SLIDERS:
            return{
                ...state,sliders:action.sliders
            };
        case types.GET_CAKE_LIST:
            return{
                ...state,
                cake:{
                    ...state.cake,
                    curType:action.curType,
                    offset:state.cake.offset+6,
                    cakeList:[...state.cake.cakeList,...action.cakeList]
                }
            };
        default:
            return state;
    }
}
