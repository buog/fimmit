import { NextFunction, Request, Response } from 'express';
import IUser from '../interfaces/IUser';
import User from '../models/UserModel';

const registerUser = (req: Request, res: Response, next: NextFunction) => {
    let { token, email, username, fullname } = req.body as IUser;

    /** checking for invalid inputs */
    if(!token){
        return res.status(500).json({message: "invalid token"});
    }
    if(!email){
        return res.status(500).json({message: "invalid email"});
    }
    if(!username){
        return res.status(500).json({message: "invalid username"});
    }
    if(!fullname){
        return res.status(500).json({message: "invalid fullname"});
    }

    const user = new User({
        token,
        email,
        username,
        fullname,
    });

    return user.save().then((result) => {
        return res.status(201).json({
            user: result,
        });
    }).catch((error) => {
        return res.status(500).json({
            message: error.message,
            error,
        });
    });
}

export default { registerUser };