import { Router,Request,Response,NextFunction as NF } from "express";
import { IController} from "../interface/IController.interface";

export class PostController implements IController{
    protected path = "/posts";
    public router:Router
    constructor(){
        this.router = Router();
        this.attachToRoutes();
    }

    private attachToRoutes(){
        const path = this.path;
        this.router.get(path,this.getPost)
    }

    private getPost(req:Request,res:Response,next:NF){
        res.send("all Post!!")
    }
}