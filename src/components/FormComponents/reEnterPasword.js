import React, { useState } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import PasswordImage from './../../views/images/password-icon.png';

const ReEnterPassword = (props) => {
    return (
        <div className="input-block">

            <TextField
                name='lastName'
                id="standard-basic"
                label={props.placeHolderText}
                className="input-field"
                autoComplete={props.autoComplete}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={PasswordImage} alt='image' />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    )
}
export default ReEnterPassword;
