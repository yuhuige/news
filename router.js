// 导包
const express = require('express');
const c_user = require('./controllers/c_user');

// 实例化
const router = express.Router();

// 配置路由
router
    .get('/signin', c_user.showSignin)
    .post('/signin', c_user.handleSignin);
    
// 导出
module.exports = router;