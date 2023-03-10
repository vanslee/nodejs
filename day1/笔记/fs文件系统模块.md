# 1.fs.readFile()使用
```js
fs.readFile(path,[,options],callback(err,result))
```
- 参数1: 必选参数,字符串,表示文件的路径
- 参数2: 可选参数,表示以什么编码格式来读取文件
- 参数3: 必选参数,文件读取完成后,通过回调函数拿到读取的结果
    - err: 如果读取成功则为null
    - result: 显示读取文件的文本内容,失败为undefined
## 1.1. 判断文件是否读取成功
> 判断err是否是null,如果为null则读取成功
# 2.fs.writeFile()使用
```js
fs.writeFile(file,data[,options],callback(err))
```
- 参数1: 必选参数,需要指定一个文件路径的字符串,表示文件的存放路径
- 参数2: 必选参数,表示要写入的内容
- 参数3: 可选参数,表示以什么格式写入文件内容,默认值是utf8
- 参数4: 必选参数,文件写入完成后的回调函数
    - 如果写入成功,则err值为null
## 2.1. 判断文件是否写入成功
> 判断err是否是null,如果为null则写入成功
## 2.2. 写入字符串并且实现换行
> 在windows系统下,在字符串末尾添加 \r\n
## 2.3. writeFile()
> - fs.writeFile()方法只能用来创建文件,不能创建路径,如果路径不存在则会报错
> - fs.writeFile()方法会覆盖文件之前的内容

# 3. 路径动态拼接问题
`在使用fs模块操作文件时,如果提供的操作路径是以./或../开头的相对路径,很容易出现路径动态拼接错误的问题
`
> 原因: 代码在运行时,会以执行node命令时所处的目录动态拼接出被操作文件的完整路径

**解决方案: 在使用fs模块操作文件时,直接提供完整的路径,不要提供./或../开头的相对路径,从而防止路径动态拼接的问题**
> 例如: __dirname + '/../练习/整理好的成绩.txt'
# 4. path路径模块
> path模块是Node.js官方提供的、用来处理路径的模块.它提供了一系列的方法和属性,用来满足用户对路径的处理需求
例: 
- path.join(),用来将多个路径片段拼接成一个完成的路径字符串
- path.basename(),从路径字符串中,将文件名解析出来