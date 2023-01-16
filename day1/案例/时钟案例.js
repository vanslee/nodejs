const fs = require('fs')
const path = require('path')
let cssRegex = /<style>[\s\S]*<\/style>/
let jsRegex = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './homework.html'), 'utf-8', (error, result) => {
    if (error) {
        console.log('读取html文件失败');
        return;
    }
    resolveCss(result);
    resolveJs(result);
    resolveHtml(result)

})
function resolveCss(htmlStr) {
    let cssStr = cssRegex.exec(htmlStr)
    fs.writeFile(path.join(__dirname, './index.css'), cssStr[0].replace('<style>', '').replace('</style>', ''), 'utf-8', (error) => {
        if (error) {
            console.log(error.message);
            return
        }
    })
}
function resolveJs(htmlStr) {
    let jsStr = jsRegex.exec(htmlStr)
    fs.writeFile(path.join(__dirname, './index.js'), jsStr[0].replace('<script>', '').replace('</script>', ''), 'utf-8', (error) => {
        if (error) {
            console.log(error.message);
            return
        }
    })
}
function resolveHtml(htmlStr) {
    let html = ''
    html = htmlStr.replace(cssRegex, '<link rel="stylesheet" href="./index.css" />').replace(jsRegex, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './index.html'), html, 'utf-8', (error) => {
        if (error) {
            console.log(error.message);
            return;
        }
        console.log('写入html成功');
    })
}