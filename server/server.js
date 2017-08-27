let cakeList=require('./mock/cakeList');
cakeList.forEach((item)=>{item.price=item.price.slice(29)});
let sliders=require('./mock/sliders');
let express = require('express');
let app = express();
let bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
let session=require('express-session');
let mongoStore=require('connect-mongo')(session);
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'zfpx',
    store:new mongoStore({
        url:'mongodb://localhost:27017/cake'
    })
}));



app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials','true');
    if(req.method==="OPTIONS") res.send(200);
    else  next();
});
app.listen(3000);
//获取轮播图数据
app.get('/sliders',function (req,res) {
    res.json(sliders);
});

//首页商品列表
app.get('/cakeList/:type/:offset/:limit',function (req,res) {
    let {type,offset,limit} = req.params;
    console.log(type,offset,limit);
    res.json(cakeList);
});

//商品详情
app.get('/detail/:id',function (req,res) {
    res.json(cakeList[1])
})