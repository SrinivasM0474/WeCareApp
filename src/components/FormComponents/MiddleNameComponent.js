import React, { useState } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';


const MiddleName = (props) => {

    return (
        <form >
            <TextField
                name='lastName'
                id="standard-basic"
                label={props.placeHolderText}
                className="input-field"
                autoComplete={props.autoComplete}
            />
        </form>
    )
}
export default MiddleName;
