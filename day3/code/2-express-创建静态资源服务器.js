const express = require('express');
const path = require('path');
// 创建服务器
let app = express()
app.use('/src', express.static(path.join(__dirname, '../WEB-INF')))
app.listen('3030', () => {
    console.log('express server running at localhost:3030');
})
