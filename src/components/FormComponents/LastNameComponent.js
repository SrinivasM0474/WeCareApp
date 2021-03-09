import React, { useState } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";


const LastName = (props) => {

    //Ref instances
    const loginForm = React.useRef(null);

    //Variable declarations
    const [errors, setErrors] = React.useState(null);


    const validate = (key) => {
        let fields = key === 'all' ? ['lastName'] : [key];
        let errorsData = errors ? errors : {};
        fields.forEach(field => {
            let loginFormelements = loginForm.current;
            if (!loginFormelements[field] || loginFormelements[field].value.trim() === '') {
                errorsData[field] = (field) + 'is required';
            } else {
                delete errorsData[field];
            }
        });
        setErrors(Object.assign({}, errorsData));
        if (Object.keys(errorsData).length > 0) {
            console.log('onchange')
            //   props.onFormControlChange(true);
            return false;
        } else {
            return true;
        }
    };


    return (
        <form ref={loginForm} >
            <TextField
                name='lastName'
                id="standard-basic"
                label={props.placeHolderText}
                className="input-field"
                autoComplete={props.autoComplete}
                error={errors && errors.lastName}
                onBlur={() => { validate('lastName'); }}
                helperText={errors && errors.lastName ? "Last Name is required" : ""}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                           <RecordVoiceOverIcon className="icon" />
                        </InputAdornment>
                    ),
                }}
            />
        </form>
    )
}
export default LastName;
