// 向module.exports对象上挂载username属性

module.exports.username = '李四'
let username = module.exports.username
module.exports.printUsername = function () {
    console.log('username' + username);
}