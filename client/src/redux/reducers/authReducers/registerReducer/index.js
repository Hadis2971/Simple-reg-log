import initialState from "./initialState";
import * as types from "../../../actions/authActions/registerActions/actionTypes";

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case(types.REGISTER_START): 
            state = {
                ...state,
                registerStart: true
            };
            return state;
        case(types.REGISTER_SUCCESS): 
            state = {
                ...state,
                registerStart: false
            };
            return state;
        case(types.REGISTER_FAIL): 
            state = {
                ...state,
                registerStart: false,
                errors: action.errors
            };
            return state;
            
        default: return state;
    }
}

export default registerReducer;


