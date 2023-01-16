const express = require('express')
const jsonParser = require('body-parser')
let app = express();
app.listen(3030, () => {
    console.log('web server is running on localhost:3030');
})
// 如果不使用内置中间件,那么req.body的值就为 undefined
app.use(jsonParser.json())
app.post('/user', (req, res) => {
    //{ username: '李登祥', age: 22, gender: '男' }
    console.log(req.body); // 打印请求所携带的请求体信息
    res.send(req.body)
})