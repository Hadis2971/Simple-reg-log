import BaseAuth from "./authBase";
import axios from "axios";

class AuthApis extends BaseAuth {
    async registerUser (user) {
        try {
          const registerResult = await axios.post((this.url + "/register"), user);
          return registerResult;
        } catch (error) {
            console.log("inside auth apis register user error", error);
        }
    };
};

const authApis = new AuthApis();
export default authApis;