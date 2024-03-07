import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Request } from 'express';


export class RoleGuard implements CanActivate {

    private rolePassed: string;

    constructor(role: string) {
        this.rolePassed = role;
    }




    canActivate(context: ExecutionContext): boolean {
        let ctx = context.switchToHttp();
        let request: any = ctx.getRequest<Request>();

        return (request.user.role === this.rolePassed);
    }

}