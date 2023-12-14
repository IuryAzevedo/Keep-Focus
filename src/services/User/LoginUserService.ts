import prismaClient from "../../prisma"
import { compare } from "bcryptjs"


interface LoginUserRequest {
    email: string,
    password: string
}

class LoginUserService {
    async execute({email, password}: LoginUserRequest){
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if(!user){
            throw new Error("Usuário ou senha incorretos, tente novamente.")
        }
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Usuário ou senha incorretos, tente novamente")
        }
    }
}

export {LoginUserService}