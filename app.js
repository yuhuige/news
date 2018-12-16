// 导入包
const express = require('express');
const router = require('./router');
// 配置包
const app = express();


// 配置第三方资源
app.use("/public", express.static("./public"));
app.use("/node_modules", express.static("./node_modules"));

app.engine('html', require('express-art-template'));

// 挂载路由->使用路由
// app.get('/',(req,res)=>{
//     res.write("abc");
//     res.end();
// })

app.use(router);

// 监听端口
app.listen(1212, () => {
    console.log('run it---');
})