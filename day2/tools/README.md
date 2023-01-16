## 安装方式
```
npm install ldx-tools
```
## 导入方式
```js
const tools = require('ldx-tools')
```
## 格式化时间
```js
// 调用 dateFormat对事件进行格式化
const dtStr = tools.dateFormat(new Date())
// 结果 2020-04-03 17:20:58
console.log(dtStr)
```
## 转义HTML中的特殊字符
```js
let str = '<h1>&nbsp;你好</h1>'
let str1 = custom.htmlEscape(str)
// 结果 &lt;h1&gt;&amp;nbsp;你好&lt;/h1&gt;
console.log(str1) 
```
## 还原HTML中的特殊字符
```js
let str = '&lt;h1&gt;&amp;nbsp;你好&lt;/h1&gt;'
let str1 = custom.htmlUnEscape(str))
// 结果 <h1>&nbsp;你好</h1>
console.log(str)
```
## 开源协议
ISC