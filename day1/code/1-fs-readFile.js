const fs = require('fs')
const path = require('path')
// 读取指定文件中的内容
fs.readFile(path.join(__dirname, '../assets/1.txt'), 'utf8', function (err, dataStr) {
    if (err == null) {
        console.log('读取成功'); console.log(dataStr);
    } else {
        console.log('读取失败');
    }
})