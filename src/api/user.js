import {get,post} from './util';
let url = 'http://localhost:3000';

//注册
export const regs=(userInfo)=>{
   return post(url+'/reg',userInfo)
};

//验证用户是否登录
export const auths=()=>{
    return get(url+'/auth')
};

//实现登录
export const logins=(userInfo)=>{
    return post(url+'/login',userInfo)
};