import React from "react";

import "./spinner.css";

const Spinner = (props) => {
    return(
        <div id="spinner-box">
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <h3 className="spinner-msg">Please Wait...</h3>
        </div>
    );
}

export default Spinner;