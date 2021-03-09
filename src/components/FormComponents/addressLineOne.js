import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import AddressImage from '../../views/images/address-icon.png';
import InputAdornment from '@material-ui/core/InputAdornment';

const AddressLineOne = (props) => {

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
                            <img src={AddressImage} alt='image' />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    )
}
export default AddressLineOne;
