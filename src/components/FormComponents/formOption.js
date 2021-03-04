
import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";

const FormOptions = (props) => {
    return (
        <div className="input-block gender-block p-t-16">
            <InputLabel className="input-label">{props.title}</InputLabel>
            <div className="gender">
                <ul>
                    {props.data.map((val) => {
                        return (
                            <li>{val}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default FormOptions;