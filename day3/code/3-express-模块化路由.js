const payRouter = require('./routes/pay')
const userRouter = require('./routes/user')
const express = require('express')
let app = express()
app.listen(3030, () => {
    console.log('模块化路由启动');
})
// app.use()用来注册全局中间件
app.use(payRouter)
// 为路由模块添加前缀
app.use("/user", userRouter)