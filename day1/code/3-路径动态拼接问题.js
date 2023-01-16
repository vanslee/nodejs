const fs = require('fs')
const path = require('path')
fs.readFile(__dirname + '/../练习/整理好的成绩.txt', 'utf-8', (err, str) => {
    console.log(err);
    console.log(str);
})