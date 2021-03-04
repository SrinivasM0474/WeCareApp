
import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const Suffix = (props) => {
    return (
        <div className="full-width input-block">
            <FormControl className="full-width">
                <InputLabel className="input-label">{props.title}</InputLabel>
                <Select className="text-left">
                    {props.data.map((val) => {
                        return (
                            <MenuItem value={val.value}>{val.displayValue}</MenuItem>
                        )
                    })}

                </Select>
            </FormControl>
        </div>
    );
};

export default Suffix;