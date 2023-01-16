const express = require('express')
let pay = express.Router();

pay.get('/pay', (req, res) => {
    res.send('你正在访问支付接口')
})
module.exports = pay