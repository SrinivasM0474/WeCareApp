import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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
    const [value, setValue] = React.useState('female');
    const classes = useStyles();
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return(
        <div className="profile-content contact-content">
            <form className="" noValidate autoComplete="off">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Choose your primary phone number</FormLabel>
                    <RadioGroup aria-label="primaryPhone" name="primaryPhone" value={value} onChange={handleChange}>
                        <FormControlLabel value="cellPhone" control={<Radio color="primary" />} label="Cell Phone" />
                        <FormControlLabel value="homePhone" control={<Radio color="primary" />} label="Home Phone" />
                        <FormControlLabel value="workPhone" control={<Radio color="primary" />} label="Work Phone" />
                    </RadioGroup>
                </FormControl>
                <TextField
                    id="phone"
                    label="Phone"
                    type="number"
                    className={classes.margin}
                    required
                />
                <TextField
                    id="phone"
                    label="Preferred Language"
                    type="text"
                    className={classes.margin}
                    required
                />
            </form>
        </div>
    );
}


export default ProfileComponent;

