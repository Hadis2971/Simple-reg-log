import RegisterComponent from "./registerComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
};

const RegisterContainer = connect(
                            mapStateToProps, 
                            mapDispatchToProps)(RegisterComponent);

export default RegisterContainer;