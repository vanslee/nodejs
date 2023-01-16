const express = require('express')
let user = express.Router()

user.get('/user', (req, res) => {
    res.send('你正在访问用户接口')
})
module.exports = user