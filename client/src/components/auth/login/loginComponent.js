import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import Button from "../../common/button";
import Spinner from "../../common/spinner";

import initialValues from "./formInitialValues";
import loginValidation from "./validation";

import "./login.css";

class LoginComponent extends Component {

    submitLoginForm = (user) => {
        const { loginUser } = this.props.actions;
        loginUser(user);
    };

    render () {
        const { authenticatingStart } = this.props;
        return (
            <Formik 
                initialValues={initialValues}
                validationSchema={loginValidation}
                onSubmit={this.submitLoginForm}
                render={(props) => {
                    return(
                        <Form id="login-form">
                        {authenticatingStart && <Spinner />}
                        <h1 className="text-center display-3 header">Sign In</h1>
                            <div className="form-group">
                                <Field 
                                    className="form-control" 
                                    type="email" 
                                    name="email" 
                                    placeholder="Your Email..."/>
                                {props.touched.email && 
                                    props.errors.email && 
                                    <p className="lead error-msg">{props.errors.email}</p>}
                            </div>
                            <div className="form-group">
                                <Field 
                                    className="form-control" 
                                    type="password" 
                                    name="password" 
                                    placeholder="Your Password..."/>
                                {props.touched.password && 
                                    props.errors.password && 
                                    <p className="lead error-msg">{props.errors.password}</p>}
                            </div>
                            <Button 
                                btnType="submit" 
                                btnClass="btn btn-block btn-primary"
                                btnText="Register"
                            />
                        </Form>
                    );
                }}
            />
        );
    }
}

export default LoginComponent;