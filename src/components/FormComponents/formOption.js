
import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";

const FormOptions = (props) => {
    return (
        <div className={props.addClass ? 'input-block gender-block p-t-16 r-address' : 'input-block gender-block p-t-16'}>
            <InputLabel className={props.labelClass ? "input-label label-width" : "input-label"}>{props.title}</InputLabel>
            <div className={props.addClass ? "gender yes-no-block" : 'gender'}>
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