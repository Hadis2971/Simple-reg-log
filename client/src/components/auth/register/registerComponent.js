import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import Button from "../../common/button";

import initialValues from "./formInitialValues";
import registerValidation from "./validation";

import "./register.css";

class RegisterComponent extends Component {

    submitRegisterForm = (values) => {
        console.log(121212);
        console.log(1, values);
    };

    render () {
        return(
            <Formik 
                initialValues={initialValues}
                validationSchema={registerValidation}
                onSubmit={this.submitRegisterForm}
                render={(props) => {
                    return(
                        <Form id="register-form">
                        <h1 className="text-center display-3 header">Sign Up</h1>
                        <div className="form-group">
                            <Field 
                                className="form-control" 
                                type="text" 
                                name="username" 
                                placeholder="Your Username..."/>
                            {props.touched.username && 
                                props.errors.username && 
                                <p className="lead error-msg">{props.errors.username}</p>}
                        </div>
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
                        <div className="form-group">
                            <Field 
                                className="form-control" 
                                type="password" 
                                name="password2" 
                                placeholder="Confirm Password..."/>
                            {props.touched.password2 && 
                                props.errors.password2 && 
                                <p className="lead error-msg">{props.errors.password2}</p>}
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

export default RegisterComponent;