let request =require('request');
let cheerio=require('cheerio');
let iconv=require('iconv-lite');//处理乱码
let url='http://www.lecake.com/?utm_source=baidu&utm_campaign=%E9%80%9A%E7%94%A8%E8%AF%8D-%E5%8C%97%E4%BA%ACL&utm_content=%E7%AB%9E%E5%93%81%E8%AF%8D&utm_term=%E9%BB%91%E5%A4%A9%E9%B9%85%E8%9B%8B%E7%B3%95&utm_medium=cpc';
request({url,encoding:null},function (err,response,body) {
    //{url,encoding:null}
    if(!err&&response.statusCode==200){
        body= iconv.decode(body,'gbk');//把jbk格式的转化为utf-8
        let $=cheerio.load(body);
        let movies=[];
        $('.bd  a img').each(function (index,item) {
            let $this=$(item);
            let movie={
                url:$this.attr('src')
            };
            movies.push(movie);
        });
        console.log(movies);
    }
    else {
        console.log(err);
    }
});
