import jwtDecode from "jwt-decode";

export const decodeAuthToken = async (token) => {
    try {
        const decodedInfo = await jwtDecode(token);
        return decodedInfo;
    } catch (error) {
        console.log("inside decode auth token error", error);
    }
};