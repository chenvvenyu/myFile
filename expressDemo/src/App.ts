import express from "express"
import {Application} from "express"
import {IController} from "../src/interface/IController.interface"
export class App{
    private port:number
    private app:Application
    constructor(port:number,controllers:IController[]){
        this.port = port;
        this.app = express();
        this.initializeMiddleware();
        this.initializeControllers(controllers);
        this.startListen();
    }

    private initializeMiddleware(){
        this.app.use(express.json())
    }

    private initializeControllers(controllers:IController[]){
        controllers.forEach(item =>{
            this.app.use("/api",item.router)
        })
    }

    private startListen(){
        this.app.listen(this.port,()=>{
            console.log(`请访问${this.port}端口`)
        })
    }
}