const fs = require('fs')
const path = require('path')
fs.writeFile(path.join(__dirname, '../assets/1.txt'), '写入的字符串', 'utf-8', function (err) {
    if (err == null) {
        console.log('写入成功');
    } else {
        console.log('写入失败');
    }
})