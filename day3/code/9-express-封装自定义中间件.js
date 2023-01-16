const qs = require('querystring')
// 6. 将自定义中间件封装为模块
module.exports.resolveUrlEncoded = (req, res, next) => {
    let str = '';
    // 2. 监听req的data事件
    req.on('data', (chunk) => {
        console.log('监听req的data事件');
        str += chunk;
    })
    // 3. 监听req的end事件
    req.on('end', () => {
        console.log('监听req的end事件');
        // 4. 使用querystring模块解析请求体数据
        const body = qs.parse(str)
        // TODO: 把字符串格式的请求体数据解析为对象格式
        // 5. 将解析出来的数据对象挂载为req.body
        req.body = body
        next();
    })
}