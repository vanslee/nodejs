const express = require('express')
const qs = require('querystring')
let app = express();
app.listen(3030, () => {
    console.log('web server is running on localhost:3030');
})
// 1. 自定义中间件
app.use((req, res, next) => {
    let str = '';
    // 2. 监听req的data事件
    req.on('data', (chunk) => {
        console.log('监听req的data事件');
        str += chunk;
    })
    // 3. 监听req的end事件
    req.on('end', () => {
        console.log('监听req的end事件');
        // 4. 使用querystring模块解析请求体数据
        const body = qs.parse(str)
        // TODO: 把字符串格式的请求体数据解析为对象格式
        // 5. 将解析出来的数据对象挂载为req.body
        req.body = body

        console.log(body);
        next();
    })
})
app.post('/user', (req, res, next) => {
    //{ username: '李登祥', age: 22, gender: '男' }
    console.log(req.body); // 打印请求所携带的请求体信息
    res.send(req.body)
})