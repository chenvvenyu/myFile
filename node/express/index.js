const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("<h1>我是首页</h1>")
})

app.get('/news/:newsId',(req,res)=>{
    res.send(`新闻Id:${req.params.newsId}`)
})

app.listen(3000,()=>{
    console.log("服务启动")
})