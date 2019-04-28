import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as loginActionCreators from "../../../redux/actions/authActions/loginActions/actionCreators";
import LoginComponent from "./loginComponent";

const mapStateToProps = (state) => {
    return {
        authenticatingStart: state.login.authenticatingStart,
        userID: state.login.userID,
        username: state.login.username,
        token: state.login.token,
        isAuthenticated: state.login.isAuthenticated,
        errors: state.login.errors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
       actions: bindActionCreators(
           {
               ...loginActionCreators
           },
           dispatch
       )
    };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default LoginContainer;