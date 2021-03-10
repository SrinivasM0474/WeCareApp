import React, { useState } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import validate from '../../validations/formValidations'


const FirstName = (props) => {

    //Ref instances
    const loginForm = React.useRef(null);

    //Variable declarations
    const [errors, setErrors] = React.useState(null);


    const validateForm = (key, loginForm) => {
        let errorsData = validate(key, loginForm)
        setErrors(Object.assign({}, errorsData));
        errorsData = errorsData && errorsData.firstName ? { firstName: '' } : { firstName: 'firstName' }
        props.formValidation(errorsData)
    };


    return (
        <form ref={loginForm} >
            <div className="input-block">
                <TextField
                    name={'firstName'}
                    id="standard-basic"
                    label={props.placeHolderText}
                    className="input-field"
                    autoComplete={props.autoComplete}
                    error={errors && errors.firstName}
                    onBlur={() => { validateForm('firstName', loginForm); }}
                    onChange={() => { validateForm('firstName', loginForm); }}
                    helperText={errors && errors.firstName ? "First name is required" : ""}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                { props.icon && <img src={props.icon} alt='image' />}
                            </InputAdornment>
                        ),
                    }}
                />
            </div>

        </form>
    )
}
export default FirstName;
