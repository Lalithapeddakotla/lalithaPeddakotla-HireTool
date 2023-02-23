import React from "react";
import spinnerImg from '../../assets/img/spinning-loading.gif';
//import Spinner from './compo'

let Spinner = () => {
    return(

        <React.Fragment>
            <div>
            <img src={spinnerImg} alt="" className="d-block m-auto"/>
            </div>
        </React.Fragment>
    )
}
export default Spinner;