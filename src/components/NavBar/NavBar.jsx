import React from "react";
import { Link } from "react-router-dom";

let NavBar = () => {
    return(

        <React.Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <div className="container">
                <Link to = {'/'} className="navbar-brand">Candidate Details</Link>
            </div>
           </nav>
        </React.Fragment>
    )
}

export default NavBar;