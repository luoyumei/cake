import {get} from './util';
let url = 'http://localhost:3000';

//获取轮播图
export const getSliders = () =>{
    return get( url+'/sliders');
};
export const getCakeLists =(type,offset,limit) =>{
    return get(url+`/cakeList/${type}/${offset}/${limit}`);
};
