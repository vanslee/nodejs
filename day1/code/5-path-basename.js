const path = require('path')
// 定义文件的存放路径
const fpath = '/a/b/c/index.html'
let str = path.basename(fpath)
console.log(str);
const nameWithoutExt = path.basename(str, '.html')
console.log(nameWithoutExt);