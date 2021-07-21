
const events = require('events')
const fs = require('fs')

let ee = new events.EventEmitter()

ee.on("helloSuccess",function(eventMsg){
    console.log("吃宵夜")
})

ee.on("helloSuccess",function(){
    console.log("唱K")
})

ee.on("helloSuccess",function(){
    console.log("打手游")
})

ee.on("helloSuccess",function(){
    console.log("打端游")
})

fs.readFile("demo.txt",{encoding:"utf-8"},function(err,data){
    console.log(data)
    ee.emit("helloSuccess",data)
})