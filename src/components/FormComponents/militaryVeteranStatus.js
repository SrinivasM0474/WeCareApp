import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';

const MilitaryVeteranStatus = (props) => {

    return (
        <div className="input-block">
            <TextField
                name='lastName'
                id="standard-basic"
                label={props.placeHolderText}
                className="input-field"
                autoComplete={props.autoComplete}
            />
        </div>
    )
}
export default MilitaryVeteranStatus;
