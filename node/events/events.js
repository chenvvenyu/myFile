//发布订阅者模式
const fs = require('fs')

fs.readFile('demo.txt',{flag:'r',encoding:'utf8'},(err,data)=>{
    if(err){
        console.log(err)
    }else{
        // console.log(data)
        lcEvent.emit('filesSuccess',data)
    }
})

//on:注册,emit:调用,event:池 
let lcEvent = {
    event:{
        // fileSuccess:[fn,fn,fn]
    },
    on:function(eventName,eventFn){
        if(this.event[eventName]){
            this.event[eventName].push(eventFn)
        }else{
            this.event[eventName] = []
            this.event[eventName].push(eventFn)
        }
    },
    emit:function(eventName,eventMsg){
        if(this.event[eventName]){
            this.event[eventName].forEach(itemFn=>{
                itemFn(eventMsg)
            })
        }
    }
}

lcEvent.on('filesSuccess',(eventMsg)=>{
    console.log("查看详情")
})

lcEvent.on('filesSuccess2',(eventMsg)=>{
    console.log("查看年龄详情")
})

lcEvent.on('filesSuccess3',(eventMsg)=>{
    console.log("查看学校详情")
})
