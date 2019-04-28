import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

class Navbar extends Component {
    render () {
        return(
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#3399ff"}}>
            <a className="navbar-brand" style={{color: "#FFF"}} href="/">Twitter Clone 2.0</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link link-style" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link-style" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link-style" to="/login">Login</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link link-style" to="/logout">Logout</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;