import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ZipImage from '../../views/images/zip-icon.png';

const ZipCode = (props) => {

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
                            <img src={ZipImage} alt='image' />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    )
}
export default ZipCode;
