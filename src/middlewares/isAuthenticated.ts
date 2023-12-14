// import { Request, Response, NextFunction } from "express";

// import {verify} from 'jsonwebtoken'


// interface PayLoad {
//     sub: string
    
// }


// export function isAuthenticated (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) {

//     const authToken = req.headers.authorization

//     if(!authToken){
//         res.status(400).end()
//     }


//     try{
//         const {sub} = verify(
//             token, 
//             process.env.JWT_SECRET
//         ) as PayLoad

//         req.user_id = sub
//     }
//     catch(err){
//         return res.status(401).end()
//     }
// }