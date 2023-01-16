// 获取文件后缀名
const path = require('path')
const fpath = '/a/b/c/index.html'
const fext = path.extname(fpath)
console.log(fext);