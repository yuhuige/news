// 导入包
const express = require('express');  // 框架
const router = require('./router');   //路由模块
const bodyParser = require('body-parser');  // 使请求多一个body保存请求数据

// 配置包
const app = express();


// 配置第三方资源
app.use("/public", express.static("./public"));
app.use("/node_modules", express.static("./node_modules"));

app.engine('html', require('express-art-template'));
// 配置body-parser
app.use(bodyParser.urlencoded({
    extended:false
}));



// 挂载路由->使用路由
// app.get('/',(req,res)=>{
//     res.write("abc");
//     res.end();
// })

app.use(router);

// 监听端口
app.listen(1212, () => {
    console.log('run it---');
});