import jwt from "jsonwebtoken";
import { secretOrKey } from "../config";

export const createAuthToken = async (user) => {
    const token = await jwt.sign(user, secretOrKey, { expiresIn: 3600 });
    return token;
};