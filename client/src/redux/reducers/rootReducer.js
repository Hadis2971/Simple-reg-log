import registerReducer from "./authReducers/registerReducer";
import loginReducer from "./authReducers/loginReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer
});

export default rootReducer;