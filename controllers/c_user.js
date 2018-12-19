// 导入
const M_user = require('../models/m_user');
// 渲染登录页
exports.showSignin = (req, res) => {
    // res.write("abc");
    // res.end();
    res.render("signin.html");
}

exports.handleSignin = (req, res) =>{
    const body = req.body;
    M_user.checkEmail(body,(err,data)=>{
        if(err){
            return res.send({
                code:500,
                msg:"服务器错误"
            });
        }
        if(data.length === 0){
            return res.send({
                code:1,
                msg: "邮箱不存在"
            });
        }
        
        // 判断密码
        if(data[0].password !== body.password){
            return res.send({
                code:2,
                msg:"密码错误"
            });
        }
        res.send({
            code:200,
            msg: "登录成功"
        })
    });
}






