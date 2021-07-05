const http = require('http')

var server = http.createServer()

server.on('request',(req,res)=>{
    // res.write('hello')
    // res.end()
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('hello 世界')
})

server.listen(3000)

