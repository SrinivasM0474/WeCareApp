import React, { useState } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import LastImageIcon from './../../views/images/last-name-icon.png'
import validate from '../../validations/formValidations'

const LastName = (props) => {

    //Ref instances
    const loginForm = React.useRef(null);

    //Variable declarations
    const [errors, setErrors] = React.useState(null);


    const validateForm = (key, loginForm) => {
        let errorsData = validate(key, loginForm)
        setErrors(Object.assign({}, errorsData));
        errorsData = errorsData && errorsData.lastName ? { lastName: '' } : { lastName: 'lastName' }
        props.formValidation(errorsData)

    };


    return (
        <form ref={loginForm} >
            <div className="input-block">

                <TextField
                    name='lastName'
                    id="standard-basic"
                    label={props.placeHolderText}
                    className="input-field"
                    autoComplete={props.autoComplete}
                    error={errors && errors.lastName}
                    onBlur={() => { validateForm('lastName', loginForm); }}
                    onChange={() => { validateForm('lastName', loginForm); }}
                    helperText={errors && errors.lastName ? "Last Name is required" : ""}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <img src={LastImageIcon} alt='image' />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        </form>
    )
}
export default LastName;
