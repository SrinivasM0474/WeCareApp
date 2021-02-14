import React from 'react';
import { TextField, FormLabel, Checkbox, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


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
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return(
        <div className="profile-content signin-content">
            <form className="" noValidate autoComplete="off">
                <TextField
                    id="userName"
                    label="User Name (Use Email ID)"
                    type="text"
                    className={classes.margin}
                    required
                />
                <TextField
                    id="possward"
                    label="Password"
                    type="password"
                    className={classes.margin}
                />
                <TextField
                    id="reEnterPassword"
                    label="Re-enter Password"
                    type="password"
                    className={classes.margin}
                    required
                />
                <div className="cust-chebox">
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <p>I have read, fully understandand agree to the "Montgomery County Government Account" Terms & Conditions.</p>
                </div>
            </form>
        </div>
    );
}


export default ProfileComponent;

