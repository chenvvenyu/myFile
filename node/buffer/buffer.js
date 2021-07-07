
// let buf = Buffer.from("helloworld")
// console.log(buf)
// console.log(buf.toString())


//allocUnsafe()的初始值不会初始化()
let buf1 = Buffer.alloc(10);
let buf2 = Buffer.allocUnsafe(10)