import React from 'react';
import { Container, Button } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

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
    return(
        <div className="profile-content">
            <form className="" noValidate autoComplete="off">
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
        </div>
    );
}


export default ProfileComponent;