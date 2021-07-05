const fs = require('fs')

// fs.writeFile(string,string,fun()) 路径 内容 回调
fs.writeFile('../dev/log.txt','hello',(err,data)=>{
    if(err){
        console.log('失败信息:'+err)
    }else{
        console.log('创建文件成功')
    }
})

// fs.readFile(string,fun()) 路径 回调
fs.readFile('../dev/log.txt',(err,data)=>{
    if(err){
        console.log('失败信息:'+err)
    }else{
        console.log('文件信息为:'+data.toString())
    }
})