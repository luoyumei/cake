let cakeList=require('./mock/cakeList');
let sliders=require('./mock/sliders');
let cakeList1=cakeList.slice(0,11);
let cakeList2=cakeList.slice(11,23);
let express = require('express');
let app = express();
let bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
let User =require('./model/index');
let session=require('express-session');
let mongoStore=require('connect-mongo')(session);
app.use(session({
    resave:true,
    //saveUninitialized:true,//是否保存初始化的
    secret:'zfpx',//加密
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
    /*最新商品——默认类型为1，返回的数据为数组从offset开始截取到offset+limit，即limit个数据
    * 最热商品——类型为2,返回的数组倒叙排列同上
    * 获取到的数据都是数组的一部分，如果接取的内容是[]，说明没人更多的数据了，写结构的时候需要判断*/
    if(type==1){
        res.json(cakeList1.slice(offset,(offset+limit)));
    }else if(type==2){
        res.json(cakeList2.slice(offset,(offset+limit)))
    }
});

//商品详情
app.get('/detail',function (req,res) {
    let {id} = req.params;
    res.json(cakeList[id])
});

let crypto=require('crypto');//密码类库
let md5=val=>{
    return crypto.createHash('md5').update(val).digest('hex')
};

//实现注册功能
app.post('/reg',function (req,res) {
    req.body.password=md5(req.body.password);
    User.findOne({username:req.body.username}).then(doc=>{
        if(doc){
            res.json({err:'此用户已存在'})
        }else{
            User.create(req.body).then(doc=>{
                req.session.user=doc;
                res.json(doc)
            })
        }
    })
});

//个人中心，验证用户是否登录
app.get('/auth',function (req,res) {
    if(req.session.user){
        res.json(req.session.user)
    }else{
        res.json({});
    }
});


//登录
app.post('/login',function (req,res) {
    req.body.password=md5(req.body.password);
    User.findOne(req.body).then(data=>{
        if(data){
            req.session.user=data;
            res.json(data)
        }else{
            res.json({err:'校验你的用户名或密码'})
        }
    })
})






