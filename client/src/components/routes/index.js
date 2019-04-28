import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../common/navbar";
import RegisterContainer from "../auth/register/registerContainer";
import LoginContainer from "../auth/login/loginContainer";

const Routes = (props) => {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route path="/register" component={RegisterContainer}/>
                <Route path="/login" component={LoginContainer}/>
            </Switch>
        </Router>
    );
};

export default Routes;