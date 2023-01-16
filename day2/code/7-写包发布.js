const custom = require('../tools')
let str = '<h1>&nbsp;你好</h1>'
let str1 = custom.htmlEscape(str)
console.log('替换:' + str1);
console.log('还原:' + custom.htmlUnEscape(str1))
console.log(custom.dateFormat('2022-6-22 13:59:20'))