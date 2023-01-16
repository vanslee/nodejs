// 入口文件
const date = require('./src/dateFormat')
const escape = require('./src/htmlResolve')
module.exports = {
    ...date, ...escape
}