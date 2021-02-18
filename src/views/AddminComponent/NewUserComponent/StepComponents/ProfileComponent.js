import React, { useState } from "react";
import { Container, Button } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";

import '../../../style.css';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const ProfileComponent = (props) => {
    const classes = useStyles();
    const dateValue = {
        date: null
    };
    const [selectedDate, setSelectedDate] = React.useState(
        new Date("2014-08-18T21:11:54")
    );

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div className="profile-content">
            {/* <form className="" noValidate autoComplete="off">
                <TextField 
                    id="firstName" 
                    label="First Name" 
                    className={classes.margin}
                    required
                />
                <TextField
                    id="middleName"
                    label="Middle Name"
                    className={classes.margin}
                    required
                />
                <TextField
                    id="lastName"
                    label="Last Name"
                    className={classes.margin}
                    required
                />
                <TextField
                    id="date"
                    label="Date of Birth"
                    type="date"
                    defaultValue={dateValue.date}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                        required: true
                    }}
                />
            </form>
             */}
            <div className="input-form-fields">
                <div className="input-block">
                    <TextField
                        name='fName'
                        id="standard-basic"
                        label="First Name(Required)"
                        className="input-field"
                    />
                    <FaceRoundedIcon className="icon" />
                </div>
                <div className="input-block">
                    <TextField
                        name='mName'
                        id="standard-basic"
                        label="Middle Name"
                        className="input-field"
                    />
                </div>
                <div className="input-block">
                    <TextField
                        name='lName'
                        id="standard-basic"
                        label="Last Name(Required)"
                        className="input-field"
                    />
                    <RecordVoiceOverIcon className="icon" />
                </div>
                <div className="input-block">
                    <TextField
                        name='mName'
                        id="standard-basic"
                        label="Suffix"
                        className="input-field"
                    />
                </div>
                <div className="full-width input-block about-date">
                    <MuiPickersUtilsProvider
                        utils={DateFnsUtils}
                        className="full-width"
                    >
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date of Birth (Required)"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                "aria-label": "change date",
                            }}
                            className="full-width button"
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <div className="input-block gender-block p-t-16">
                    <InputLabel className="input-label">Gender</InputLabel>
                    <div className="gender">
                        <ul>
                            <li className="selected">Female</li>
                            <li>Male</li>
                            <li>Other</li>
                        </ul>
                    </div>
                </div>
                <div className="input-block">
                    <TextField
                        id="standard-basic"
                        label="SSN"
                        className="input-field"
                    />
                </div>
            </div>
        </div>
    );
}


export default ProfileComponent;

