const router = require("express").Router();
import { validateRegisterInput, sanitizeRegisterInput } from "./validateSanitize";
import { validateLoginInput, sanitizeLoginInput } from "./validateSanitize";
import { registerUser } from "./registerUser";
import { loginUser } from "./loginUser";

router.post("/register", validateRegisterInput, sanitizeRegisterInput, registerUser);

router.post("/login", validateLoginInput, sanitizeLoginInput, loginUser);

export default router;