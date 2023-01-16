//创建HTTP服务器

//1. 加载http模块
var http = require('http');
//2. 创建http服务器
// 参数: 请求的回调, 当有人访问服务器的时候,就会自动调用回调函数
var server = http.createServer(function (request, response) { })

server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    // url是客户端请求的URL地址
    const url = req.url;
    // method是客户端请求的method类型
    const method = req.method;
    const str = `你正在请求${url},方式为${method}`;
    console.log(str);
    res.end(str)
})
//3. 绑定端口
server.listen(3030, 'localhost')

//4. 执行
console.log('执行了3030')