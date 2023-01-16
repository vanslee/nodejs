console.log('module.exports是否和exports是同一个东西', module.exports === exports)
exports.age = 20
module.exports.username = '张三'

console.log('module.exports', module.exports);
console.log('exports', exports);