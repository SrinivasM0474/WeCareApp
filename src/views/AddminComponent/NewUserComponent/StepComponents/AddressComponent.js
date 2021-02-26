import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PinDropSharpIcon from "@material-ui/icons/PinDropSharp";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import InputAdornment from "@material-ui/core/InputAdornment";
import ZipImage from '../../../../views/images/zip-icon.png';
import AddressImage from '../../../../views/images/address-icon.png';


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
    return (
        <div className="profile-content address-content">
            {/* <form className="" noValidate autoComplete="off">
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
            </form> */}
            <div className="input-form-fields">
                <div className="input-block">
                    <TextField
                        id="standard-basic"
                        label="Address Line 1 (Required)"
                        className="input-field"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {/* <PinDropSharpIcon className="icon" /> */}
                                    <img src={AddressImage} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>

                <div className="input-block">
                    <TextField
                        id="standard-basic"
                        label="Address Line 2"
                        className="input-field"
                    />
                </div>

                <div className="input-block">
                    <TextField
                        id="standard-basic"
                        label="City (Required)"
                        className="input-field"
                    />
                </div>

                <div className="input-block">
                    <TextField
                        id="standard-basic"
                        label="State (Required)"
                        className="input-field"
                    />
                </div>

                <div className="input-block">
                    <TextField
                        id="standard-basic"
                        label="Zip Code (Required)"
                        className="input-field"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {/* <HomeSharpIcon className="icon" /> */}
                                    <img src={ZipImage} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
            </div>
        </div>
    );
}


export default ProfileComponent;

