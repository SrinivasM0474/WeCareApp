import React from 'react';
import TextField from '@material-ui/core/TextField';
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
    return(
        <div className="profile-content address-content">
            <form className="" noValidate autoComplete="off">
                <TextField
                    id="address"
                    label="Address Line 1"
                    type="text"
                    className={classes.margin}
                    required
                />
                <TextField
                    id="address1"
                    label="Address Line 2"
                    type="text"
                    className={classes.margin}
                />
                <TextField
                    id="zip"
                    label="Zip"
                    type="number"
                    className={classes.margin}
                    required
                />
                <TextField
                    id="status"
                    label="Status"
                    type="text"
                    className={classes.margin}
                    required
                />
                <TextField
                    id="city"
                    label="City"
                    type="text"
                    className={classes.margin}
                    required
                />
                <TextField
                    id="country"
                    label="Country"
                    type="text"
                    className={classes.margin}
                    required
                />
            </form>
        </div>
    );
}


export default ProfileComponent;

