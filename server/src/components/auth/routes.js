const router = require("express").Router();
import { validateRegisterInput, sanitizeRegisterInput } from "./validateSanitize";
import { validateLoginInput, sanitizeLoginInput } from "./validateSanitize";
import { registerUser } from "./registerUser";

router.post("/register", validateRegisterInput, sanitizeRegisterInput, registerUser);

router.post("/login", validateLoginInput, sanitizeLoginInput);

export default router;