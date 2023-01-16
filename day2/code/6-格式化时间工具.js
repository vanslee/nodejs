const custom = require('../modules/custom.m5')
let result = custom.dateFormat('2022-6-22 12:20:11')
console.log(result);


const moment = require('moment')
let date = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(date);