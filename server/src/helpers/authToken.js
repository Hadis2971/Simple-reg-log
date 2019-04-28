import jwt from "jsonwebtoken";
import { secretOrKey } from "../config";

export const createAuthToken = async (user) => {
    const token = await jwt.sign(user, secretOrKey, { expiresIn: 3600 });
    return token;
};

export const verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; 
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, secretOrKey, (err, decoded) => {
        if (err) {
            return res.json({
            success: false,
            message: 'Token is not valid'
            });
        } else {
            req.decoded = decoded;
            next();
        }
    });
  } else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};