import * as types from "./actionTypes";
import { decodeAuthToken } from "../../../../helpers";
import authApis from "../../../../api/auth/authApis";

export const loginUser = (user) => async (dispatch) => {
    dispatch({type: types.LOGIN_START});
    const loginResult = await authApis.loginUser(user);
    console.log("inside login user login result", loginResult);
    if (loginResult.data.Error) {
        dispatch({
            type: types.LOGIN_FAIL,
            errors: loginResult.data.Error
        });
    } else {
        const userData = await decodeAuthToken(loginResult.data.token);
        console.log("inside login user action creator", userData);
        dispatch({
            type: types.LOGIN_SUCCESS,
            userID: userData.userID,
            username: userData.username,
            token: userData.token,
            isAuthenticated: (!!userData.token),
            errors: null,
            authenticatingStart: false,
        });
    };
};