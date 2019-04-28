import * as types from "./actionTypes";
import authApis from "../../../../api/auth/authApis";

export const loginUser = (user) => async (dispatch) => {
    dispatch({type: types.LOGIN_START});
    const loginResult = await authApis.loginUser(user);
    if (loginResult.data.Error) {
        dispatch({
            type: types.LOGIN_FAIL,
            errors: loginResult.data.Error
        });
    } else {
        dispatch({
            type: types.LOGIN_SUCCESS,
            userID: loginResult.data.userID,
            username: loginResult.data.username,
            token: loginResult.data.token,
            isAuthenticated: (!!loginResult.data.token),
            errors: null,
            authenticatingStart: false,
        });
    };
};