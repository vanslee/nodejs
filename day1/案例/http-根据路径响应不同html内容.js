const http = require('http')
const server = http.createServer();
server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    if (req.url == '/' || req.url == '/index.html') {
        res.end('<h1>首页</h1>')
    } else if (req.url == '/about') {
        res.end('<h1>关于页面</h1>')
    }
    else {
        res.end('<h1>404 Not Found!</h1>')
    }
})
server.listen(3030, 'localhost', () => {
    console.log('正在监听3030端口');
})