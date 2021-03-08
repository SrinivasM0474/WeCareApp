
import React, { useState } from "react";
import clsx from "clsx";
import { Grid, TextField, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Help from "@material-ui/icons/Help";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Container from "@material-ui/core/Container";
//import PersonTwoToneIcon from "@material-ui/icons/PersonTwoTone";
// import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import PersonIcon from "@material-ui/icons/Person";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import RecordVoiceOverOutlinedIcon from "@material-ui/icons/RecordVoiceOverOutlined";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import WcIcon from "@material-ui/icons/Wc";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import PinDropSharpIcon from "@material-ui/icons/PinDropSharp";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import PhoneInTalkSharpIcon from "@material-ui/icons/PhoneInTalkSharp";
import MailIcon from "@material-ui/icons/Mail";
import LanguageIcon from "@material-ui/icons/Language";
import MaskedInput from 'react-text-mask'
import { GENDER_MALE, GENDER_OTHER, GENDER_FEMALE } from "../../constants";
import IconButton from '@material-ui/core/IconButton';

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";

const ContactInformation = (props) => {
    // const classes = useStyles();
    const [isActive, setIsActive] = useState(false);
    const [isGender, setIsGender] = useState(false);

    const [formdata, setFormdata] = useState({
        fName: '',
        mName: '',
        lName: '',
        date: '',
        ssn: '',
        error: true,
        suffix: {
            options: [
                {
                    value: 0,
                    displayValue: "None",
                },
                {
                    value: 10,
                    displayValue: "Jr.",
                },
                {
                    value: 20,
                    displayValue: "Sr.",
                },
                {
                    value: 30,
                    displayValue: "II",
                },
                {
                    value: 40,
                    displayValue: "III",
                },
                {
                    value: 50,
                    displayValue: "IV",
                },
            ],
        }
    })

    //Ref instances
    const loginForm = React.useRef(null);


    //Variable declarations
    const [errors, setErrors] = React.useState(null);

    const handleClick = (buttonFlag) => {
        setIsActive(buttonFlag);
    };


    /**
    * generate mandatory symbol.
    * @param {string} key contains field name which should is verified
    * @return {boolean} return true if there are no errors and false if there are errors.
    */
    const validate = (key) => {
        let fields = key === 'all' ? ['firstName', 'lastName'] : [key];
        let errorsData = errors ? errors : {};
        fields.forEach(field => {
            let loginFormelements = loginForm.current;
            if (!loginFormelements[field] || loginFormelements[field].value.trim() === '') {
                errorsData[field] = (field === 'firstName' ? 'firstName ' : 'lastName ') + 'is required';
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
            if (isGender === false) {
                // props.onFormControlChange(true);
            }
            else {
                // props.onFormControlChange(false);
            }

            return true;
        }
    };



    const [selectedDate, setSelectedDate] = React.useState(
        new Date("2014-08-18T21:11:54")
    );


    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleGenderChange = (value) => {
        if (value === GENDER_FEMALE) setIsGender(GENDER_FEMALE);
        else if (value === GENDER_MALE) setIsGender(GENDER_MALE);
        else setIsGender(GENDER_OTHER);
        // if (!errors.firstName && !errors.lastName) {
        // //   props.onFormControlChange(false);
        // }

    };

    return (
        <div>
            <Container className="modal-container" maxWidth="md" >
                <form ref={loginForm} >
                    <div className="about-yourself adult-household profile-content">
                        <div className="input-form-fields">
                            <div className="input-block">
                                <TextField
                                    type='text'
                                    name='phoneno'
                                    error={errors && errors.phoneno}
                                    autoComplete='off'
                                    id="standard-basic"
                                    label="Phone number (Required)"
                                    className="input-field"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <PhoneInTalkSharpIcon className="icon" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>

                            <div className="about-origin">
                                <InputLabel className="input-label label-width">
                                    Is the phone number provided:
              </InputLabel>
                                <div className="input-block gender-block">
                                    <div className="gender">
                                        <ul>

                                            <li>Mobile</li>
                                            <li>Home</li>
                                            <li>Work</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="input-block">
                                <TextField
                                    name='fName'
                                    id="standard-basic"
                                    label="Email"
                                    className="input-field"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <MailIcon className="icon" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                            </div>
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default ContactInformation;