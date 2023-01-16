const express = require('express')
const app = express()
const middleware = function (req, res, next) {
    // res.send('这是局部中间件')
    console.log('局部中间件,在访问/user时才会生效');
    next();
}
app.listen(3030, () => {
    console.log('局部中间件');
})
app.get('/user', middleware, (req, res, next) => {
    res.send('你正在访问/user')
    // next();
})
app.get('/user1', (req, res, next) => {
    res.send('你正在访问/user1')
    // next();
})