const custom = require('../modules/custom.m3')
console.log(custom);

console.log('原来的username');
custom.printUsername()
custom.username = '张三'
console.log(custom);
console.log('修改后的username');
custom.printUsername()
