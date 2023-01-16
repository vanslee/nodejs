const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer();
server.on('request', (req, res) => {
    // res.setHeader('Content-Type', 'text/html;charset=utf-8')
    if (req.url == '/' || req.url == '/index.html' || req.url == '/index.css' || req.url == '/index.js') {
        if (req.url == '/') {
            getHtml(path.join(__dirname, './index.html'), res)
        } else {
            getHtml(path.join(__dirname, req.url), res)
        }
        // let css = getCss()
        // let js = getJs()


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
function getHtml(url, res) {
    console.log(url);
    fs.readFile(url, (error, data) => {
        if (error) {
            res.end(res.message)
            return
        }
        res.end(data)
    })
}