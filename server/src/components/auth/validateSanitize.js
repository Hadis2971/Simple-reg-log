import registerSanitize from "../../input_check/sanitize/register";
import registerValidation from "../../input_check/validate/register";

export const validateRegisterInput = (req, res, next) => {
    const { errors, isValid } = registerValidation(req.body);
    if (!isValid) {
        res.status(400).json({Error: errors});
    } else next();
};

export const sanitizeRegisterInput = (req, res, next) => {
    registerSanitize(req.body);
    next();
};