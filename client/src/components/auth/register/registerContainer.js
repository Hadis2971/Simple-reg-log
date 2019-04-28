import RegisterComponent from "./registerComponent";
import * as registerActionCreators from "../../../redux/actions/authActions/registerActions/actionCreators";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        registerStart: state.register.registerStart,
        errors: state.register.errors
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...registerActionCreators
        },
            dispatch
        )
    }
};

const RegisterContainer = connect(
                            mapStateToProps, 
                            mapDispatchToProps)(RegisterComponent);

export default RegisterContainer;