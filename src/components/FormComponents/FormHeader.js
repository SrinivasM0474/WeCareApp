
import React, { useState } from "react";
import Container from "@material-ui/core/Container";

const FormHeader = (props) => {
    return (
        <div className="about-header d-flex">
            <span>
                <img src={props.img} alt={props.alt} width='30' />
            </span>
            <h3>{props.headerTitle}</h3>
        </div>
    );
};

export default FormHeader;