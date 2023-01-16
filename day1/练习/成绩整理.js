// 先引入fs
const fs = require('fs')
// 读取成绩.txt
fs.readFile('./成绩.txt', 'utf-8', function (err, str) {
    if (err == null) {
        // 读取成功
        let arr = str.split(',');
        let result = '';
        arr.forEach(Element => {
            let newStr = Element.replace(/=/ig, ': ') + '\r\n'
            result += newStr
        })
        fs.writeFile('./整理好的成绩.txt', result, 'utf-8', function (err) {
            if (err == null) {
                console.log('写入成功');
            } else {
                console.log('写入失败');
            }
        })

    }
})