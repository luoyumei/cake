import * as types from '../action-types';
let initState={
    err:'',
    userInfo:{
       username:'',
       password:''
   }
};
export default function (state=initState,action) {
    switch (action.type){
        case types.SET_ERR:
            return{
                ...state,
                err:action.err
            };
        case types.SET_USER_INFO:
            return {
                ...state,
                userInfo:action.userInfo,
                err:''
            };

    }
    return state;
}