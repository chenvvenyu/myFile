const fs = require('fs')

// fs.writeFile(string,string,fun()) 路径 内容 回调
// fs.writeFile('../dev/log.txt','hello',(err,data)=>{
//     if(err){
//         console.log('失败信息:'+err)
//     }else{
//         console.log('创建文件成功')
//     }
// })

// // fs.readFile(string,fun()) 路径 回调
// fs.readFile('../dev/log.txt',(err,data)=>{
//     if(err){
//         console.log('失败信息:'+err)
//     }else{
//         console.log('文件信息为:'+data.toString())
//     }
// })

// fs.appendFile('../dev/log.txt',"添加数据",(err)=>{
//     err?console.log(err):console.log("添加数据数据成功")
// })

// fs.open('../dev/log.txt','a',(err,fd)=>{
//     console.log(fd)
// })

// fs.chmod('../dev/log.txt',0o775,(err)=>{
//     err?console.log(err):console.log("更改文件的权限成功")
// })