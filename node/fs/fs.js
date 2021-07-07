const fs = require('fs')

// fs.writeFile(string,string,fun()) 路径 内容 回调
// fs.writeFile('../dev/log.txt','hello',(err,data)=>{
//     if(err){
//         console.log('失败信息:'+err)
//     }else{
//         console.log('重写文件成功')
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

// fs.appendFile('../dev/log.txt',"添加数据\r\n",(err)=>{
//     err?console.log(err):console.log("添加数据数据成功")
// })

// fs.open('../dev/log.txt', 'a', (err, fd) => {
//     console.log(fd)
//     err ? console.log(err) : console.log("打开文件成功")
//     //fs.fchmod(fd,mode,callback)
//     //fs.fchown(fd,uid,gid,callback)设置文件持有者
//     fs.close(fd, (err) => {
//         err ? console.log(err) : console.log("关闭文件成功")
//     })
// })

// fs.chmod('../dev/log.txt',0o775,(err)=>{
//     err?console.log(err):console.log("更改文件的权限成功")
// })

// fs.copyFile('../dev/log.txt','../dev/log副本.txt',(err)=>{
//     err?console.log(err):console.log("复制文件的成功")
// })

// fs.unlink('../dev/log.txt',(err)=>{
//     err?console.log(err):console.log("删除文件文件的成功")
// })


//文件流
let data = new Date()
// let ws = fs.createWriteStream('../dev/log2.txt')
let ws = fs.createReadStream('../dev/log3.txt')
// let ws2 = fs.createWriteStream('../dev/log4.txt')

ws.on('open',()=>{
    console.log('文件打开')
})
ws.on('close',()=>{
    console.log('文件关闭')
})
ws.on('ready',()=>{
    console.log('准备写入')
})
// ws.write(`写入时间:${data.getHours()}-${data.getMinutes()}-${data.getSeconds()}`)
// ws.end()

ws.on('data',(chunk)=>{
    console.log(chunk.toString())
})
ws.pipe(ws2)
