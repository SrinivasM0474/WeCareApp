import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import PreferredLanguageIcon from './../../views/images/language-icon.png';
import InputAdornment from '@material-ui/core/InputAdornment';

const PreferredLanguage = (props) => {

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
                            <img src={PreferredLanguageIcon} alt='image' />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    )
}
export default PreferredLanguage;
