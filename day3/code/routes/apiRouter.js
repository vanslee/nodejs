const express = require('express')
const parseTime = require('../../../day2/modules/custom.m5')
const apiRouter = express.Router()
apiRouter.get('/getDate', (req, res, next) => {
    let result = {
        status: 200,
        msg: 'GET请求成功',
        data: {
            时间: parseTime.dateFormat(Date())
        }
    }
    res.send(result)
})
apiRouter.post('/getDate', (req, res, next) => {
    const body = req.body;
    res.send({
        status: 200,
        msg: 'POST请求成功',
        data: body
    })
})
module.exports.apiRouter = apiRouter