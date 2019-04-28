import passport from "passport";
import { createAuthToken } from "../../helpers/authToken";

export const loginUser = (req, res, next) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        next(err);
        if (err || !user) {
            return res.status(400).json({Error: "Wrong Credentials"});
        }

        req.login(user, {session: false}, async (err) => {
            if (err) {
                next(err);
            }

            const token = await createAuthToken({
                username: user.username,
                userID: user.id
            });

            return res.json({token: ("Bearer " + token)});
        });
    })
    (req, res);
}