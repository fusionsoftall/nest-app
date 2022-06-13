import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { writeLog } from "src/common/utility/consol-log";

@Injectable()
export class RoleGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        writeLog("Guard");
        writeLog(request.url);

        return this.validateRequest(request);
    }

    validateRequest(req: Request):boolean
    {
        return true;
    }
}