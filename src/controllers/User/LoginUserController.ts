import { Request, Response, NextFunction } from "express";
import { LoginUserService } from "../../services/User/LoginUserService";

class LoginUserController {
    async handle() {
        const loginUserService = new LoginUserService()
    }
}

export {LoginUserController}