import React, { useState } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import EmailImg from '../../views/images/email-icon.png';

const EmailForm = (props) => {

    //Ref instances


    return (
        <div className="input-block">
            <TextField
                // type='text'
                name='email'
                autoComplete={props.autoComplete}
                // error={errors && errors.email}
                // onBlur={() => { validatecontact('email'); }}
                // onChange={() => { validatecontact('email'); }}
                id="standard-basic"
                label={props.placeHolderText}
                className="input-field"
                // helperText={errors && errors.email ? "email is required" : ""}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={EmailImg} alt='email' />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    )
}
export default EmailForm;
