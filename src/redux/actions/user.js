import * as types from '../action-types';
import {regs,auths,logins} from '../../api/user';
import util from '../../common/util';
import {push} from 'react-router-redux';
export const reg=(userInfo)=>(dispatch)=>{
    regs(userInfo).then(data=>{
        if(data.err){
            dispatch({
                type:types.SET_ERR,
                err:data.err
            })
        }else{
            util.set('user',data);
            dispatch({
                type:types.SET_USER_INFO,
                userInfo:data
            });
            dispatch(push('/profile'))
        }
    })
};
export const auth=()=>(dispatch)=>{
    auths().then(data=>{
        if(data.username){
            util.set('user',data);
            dispatch({
                type:types.SET_ERR,
                userInfo:data
            })
        }else{//没有登录不进行任何操作

        }
    })
};
export const login=(userInfo)=>(dispatch)=>{
    logins(userInfo).then(data=>{
        if(data.err){
            dispatch({
                type:types.SET_ERR,
                err:data.err
            })
        }else{
            util.set('user',data);
            dispatch({
                type:types.SET_USER_INFO,
                userInfo:data
            });
          dispatch(push('/profile'))
        }
    })
};

export const del=()=> {
    sessionStorage.clear();
    return{
        type:types.DEL,
    }
};