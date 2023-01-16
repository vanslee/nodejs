const express = require('express')
const payRouter = require('./routes/pay')
const app = express()
const mw = function (req, res, next) {
    // 把流转关系,转交给下一个中间或路由
    console.log('这是最简单的中间函数');
    next();
}
app.listen(3030, () => {
    console.log('中间件路由');
})
app.use(mw);
app.use(payRouter)