import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/User/CreateUserController';


const router = Router()
// -----ROTAS USUÁRIOS----
router.post('/users', new CreateUserController().handle)


export {router}