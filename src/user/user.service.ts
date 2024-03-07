import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { CONSTANTS } from "../constant";

@Injectable()
export class UserService {
    public users: User[] = [{
        userName: 'Aditya',
        password: '12345',
        email: 'aditya@gmail.com',
        role: CONSTANTS.ROLES.ANDROID_DEVELOPER
    },
    {
        userName: 'Mohan',
        password: '123456',
        email: 'aditya1@gmail.com',
        role: CONSTANTS.ROLES.WEB_DEVELOPER
    }]

    getUserByName(username): User {
        return this.users.find((user) => user.userName === username);
    }
}