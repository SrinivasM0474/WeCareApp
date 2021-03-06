import React, { useState } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
// import MailIcon from "@material-ui/icons/Mail";
import * as NAMES from '../../constants';

import MaskedInput from 'react-text-mask';

const PhoneNumber = (props) => {

    //Ref instances
    const loginForm = React.useRef(null);


    return (
        <form ref={loginForm} >
            <div className="input-block">
                {/* <div className={phoneNo === '' ? "floating_labels phone-bg phone-error" : 'floating_labels phone-bg'}> */}
                <div className='floating_labels phone-bg '>
                    <MaskedInput
                        mask={[/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        className='floating-input'
                        autoComplete={props.autoComplete}
                        guide={false}
                        id="my-input-id"
                        // onChange={(e) => { changeValids(e) }}
                        required
                    />
                    <label>{NAMES.PHONE_NUMBER_TEXT}</label>
                    {/* <span>{phoneNo === '' ? "Phone number is required" : ''}</span> */}
                </div>
            </div>
        </form>
    )
}
export default PhoneNumber;
