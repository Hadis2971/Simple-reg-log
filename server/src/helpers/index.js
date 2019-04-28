import isEmpty from "is-empty";
import bcrypt from "bcryptjs";

export const handleEmptyInput = (input) => {
    for (let key in input) {
        if (isEmpty(input[key])) input[key] = "";
    }
};

export const hashUserPassword = async (password, next) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt)
      return hash;
    } catch (error) {
        next(error);
    }
};

export const checkUserPassword = async (password, hash) => {
    try {
      const passwordMatch = await bcrypt.compare(password, hash);
      return passwordMatch;
    } catch (error) {
      console.log("inside check password error", error);
    }
};