import initialState from "./initialState";
import * as types from "../../../actions/authActions/loginActions/actionTypes";

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case(types.LOGIN_START): 
            state = {
                ...state,
                authenticatingStart: true
            };
            return state;
        case(types.LOGIN_SUCCESS): 
            state = {
                authenticatingStart: false,
                userID: action.userID,
                username: action.username,
                token: action.token,
                isAuthenticated: (!!action.token),
                errors: null
            };
            return state;
        case(types.LOGIN_FAIL):
            state = {
                authenticatingStart: false,
                userID: null,
                username: null,
                token: null,
                isAuthenticated: false,
                errors: action.errors
            };
            return state;
        
        default: return state;
    };
};

export default loginReducer;