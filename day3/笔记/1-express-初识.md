# 1 初识Express
## 1.1 Express简介
1. 什么是express?
官方给出的概念: Express是基于Node.js平台,快速、开放、极简的Web开发框架 \
`通俗的理解:`Express的作用和Node.js内置的http模块类似,是专门用来创建Web服务器的.
`Express本质:` 就是npm上的第三方包,提供了快速创建Web服务器的便捷方法.
2. express能做什么
1. Web网站服务器: 专门对外提供Web网页资源的服务器
2. Api接口服务器: 专门对外提供API接口的服务器
# 2 安装Express
```sh
$ npm i express@4.17.1
```
# 3 创建基本的Web服务器
```js
const express = require('express')
const app = express()
app.listen(3030, () => {
    console.log('express server running at localhost:3030');
})
```
## 3.1 监听Get请求
```js
app.get('请求URL',function(req,res){
    /*处理逻辑*/
})
```
1. 获取请求参数
例如: `localhost:3030/user?age=10&name=张三`
```js
app.get('/user', (req, res) => {
    let temp = req.query //{ age: '10', name: '张三' }
})
```
2. 获取URL中的动态参数
例如:  `localhost:3030/user/1`
```js
app.get('/user/:id', (req, res) => {
    let temp = req.params //{ id: '1' }
})
```
# 4. 托管静态资源
1. express.static()
> &nbsp;&nbsp;&nbsp;&nbsp;express提供了一个非常好用的函数,叫做express.static(),通过它,我们可以非常方便地创建一个静态资源服务器,例如,通过如下代码就可以将public目录下的图片、CSS文件、JavaScript文件对外开放访问了
2. `注意`: 如果要托管多个静态资源目录,请多次调用express.static()函数,但是如果两个目录下都有index.html文件夹,通过路径访问,会访问到public目录下的index.html,因为先加载.
```js
app.use(express.static('public'))
app.use(express.static('files'))
```
3. 挂载路径前缀 \
&nbsp;&nbsp;&nbsp;&nbsp;我们将public目录下的静态资源进行托管,那么我们通过路径访问这些静态资源时是不包含public的.如果需要包含public,则这样写:
```js
app.use('/public',express.static('public'))
```
# 5. 认识nodemon(相当于热部署)
## 5.1 安装nodemon
```sh
$ npm i -g nodemon
```
## 5.2 使用nodemon
```sh
$ nodemon app.js
```
## 5.3 如果vscode提示禁止运行任何脚本,那么以管理员身份运行powershell,输入`Set-ExecutionPolicy RemoteSigned`,之后输入y回车就ok了