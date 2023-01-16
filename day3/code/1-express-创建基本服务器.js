const express = require('express')
const app = express()
app.listen(3030, () => {
    console.log('express server running at localhost:3030');
})
app.get('/user/:id', (req, res) => {
    console.log('用户正在请求' + req.url
        + '     ' + '请求方式:' + req.method
        + '     ' + '请求参数: ', req.query,
        + '     ' + '动态参数: ', req.params);
    res.send({
        name: '张三',
        age: 20,
        gender: '男'
    })
})
app.post('/user', (req, res) => {
    console.log('用户正在请求' + req.url + '        ' + '请求方式:' + req.method);
    res.send('修改用户信息成功')
})