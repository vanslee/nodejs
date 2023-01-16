const path = require('path')
const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr); //  输出\a\b\d\e
const pathStr1 = path.join(__dirname, '../练习/整理好的成绩.txt')
console.log(pathStr1); // C:\Users\ldx\Desktop\workspace\nodejs\day1\练习\整理好的成绩.txt
