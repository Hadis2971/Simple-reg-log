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

    async loginUser (user) {
        try {
          const loginResult = await axios.post((this.url + "/login"), user);
          return loginResult;
        } catch (error) {
            console.log("inside auth apis login user error", error);
        }
    }
};

const authApis = new AuthApis();
export default authApis;