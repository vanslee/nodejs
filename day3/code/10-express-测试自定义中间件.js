const express = require('express')
// 1. 导入自己封装的中间件模块
const bodyParse = require('./9-express-封装自定义中间件')
let app = express();
app.listen(3030, () => {
    console.log('web server is running on localhost:3030');
})
// 2. 将自定义的中间件函数,注册为全局可以用的中间件
app.use(bodyParse.resolveUrlEncoded)
app.post('/user', (req, res, next) => {
    //{ username: '李登祥', age: 22, gender: '男' }
    console.log(req.body); // 打印请求所携带的请求体信息
    res.send(req.body)
})