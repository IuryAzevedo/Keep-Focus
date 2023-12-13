import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";
import {hash} from 'bcryptjs';


interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        if (!email) {
            throw new Error('Email incorreto, tente novamente.');

        }
        const userExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userExists) {
            throw new Error("Esse email já existe")
        }

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            }
        })

        return user
    }
}


export { CreateUserService }