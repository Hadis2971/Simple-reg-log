import * as types from "./actionTypes";
import authApis from "../../../../api/auth/authApis";

export const registerUser = (user) => async (dispatch) => {
    dispatch({type: types.REGISTER_START});
    const registerResult = await authApis.registerUser(user);
    if (registerResult.data.Error) {
        dispatch({
            type: types.REGISTER_FAIL,
            errors: registerResult.data.Error
        });
    } else {
        dispatch({
            type: types.REGISTER_SUCCESS,
            data: registerResult.data.data
        });
    };
};