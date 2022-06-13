import { NestMiddleware } from "@nestjs/common";
import { writeLog } from "src/common/utility/consol-log";


export class LoggerMiddleware implements NestMiddleware{

    use(req:any, res:any, next:()=>void){
        writeLog("middleware");
        console.log(`HTTP요청... host: ${req.headers.host}, url: ${req.originalUrl}, method:${req.method}`);
        next();
    }
}