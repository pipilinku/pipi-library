// //req是请求，res是响应
// const express = require("express");    //引入express框架
// const app = express(); //创建网站服务器

// //设置路由
// app.use((req, res, next) => {  //接收所有请求，所以都先来我这走一遍
//     console.log("请求走了app.use中间件");
//     next();  //继续匹配中间件
// })
// app.get("/", (req, res) => {     //请求处理：访问localhost:3000(默认访问地址是"/")
//     //res.send("你好，express"); //普通响应
//     res.send({ name: "张三", age: 20 }); //响应一个json对象
// })
// app.get("/request", (req, res, next) => { //请求处理：处理完交给下一个中间件
//     req.name = "张三";
//     next();  //继续匹配中间件
// })
// app.get("/request", (req, res) => { //请求处理：访问/request页面
//     res.send(req.name);   //结束
// })
// app.listen(3000); //监听3000端口
// console.log("网站服务器启动成功");

//引入express框架
const express = require("express");
//路经处理模块
const path = require("path");
const bodyParser = require("body-parser");//post请求时的模块
//创建web服务器
const app = express();
app.use(bodyParser.urlencoded());//post请求键值对格式时的模块
app.use(bodyParser.json());
//静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));
app.post("/first", (req, res) => {
    res.send(req.body);
})

//监听3000端口
app.listen(3000);
console.log("网站服务器启动成功");