import { hashUserPassword } from "../../helpers";
import Users from "../../database/models/Users";

export const registerUser = async (req, res, next) => {
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };

    newUser.password = await hashUserPassword(newUser.password);
    const user = await Users.create(newUser);
    
    res.json(user);
}