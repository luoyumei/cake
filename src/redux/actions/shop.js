import * as types from '../action-types';
export const buy=(shopInfo)=>{
    return{
        type:types.GO_TO_BUY,
        shopInfo
    }
}