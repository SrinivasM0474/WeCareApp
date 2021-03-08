import React from "react";

import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Help from "@material-ui/icons/Help";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Container from "@material-ui/core/Container";
//import PersonTwoToneIcon from "@material-ui/icons/PersonTwoTone";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
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
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ZipImage from '../../views/images/zip-icon.png';
import AddressImage from '../../views/images/address-icon.png';

const ProviderAddress = (props) => {
    const [isAnotherAddress, setIsAnotherAddress] = React.useState(false);
    const handleAnotherAddress = (value) => {
        if (value === "Yes") {
            setIsAnotherAddress(true);
            props.onFormControlChange(true);
        }
        else if (value === "No") {
            props.onFormControlChange(false);
            setIsAnotherAddress(false);
        }
    }
    const loginForm = React.useRef(null);
    const addressNew = React.useRef(null);


    //Variable declarations
    const [errors, setErrors] = React.useState(null);
    const [errorsAnother, setErrorsAnother] = React.useState(null);
    const validate = (key) => {
        let fields = key === 'all' ? ['AddressLine1', 'City', 'State', 'ZipCode'] : [key];
        let errorsData = errors ? errors : { AddressLine1: '', City: '', State: '', ZipCode: '' };
        fields.forEach(field => {
            let loginFormelements = loginForm.current;
            if (!loginFormelements[field] || loginFormelements[field].value.trim() === '') {
                errorsData[field] = (field) + 'is required';
            }
            else {
                delete errorsData[field];
            }
        });
        setErrors(Object.assign({}, errorsData));
        if (Object.keys(errorsData).length > 0) {
            props.onFormControlChange(true);
            return false;
        } else {
            props.onFormControlChange(false);

            return true;
        }
    };
    const validateAnother = (key) => {
        let fieldsNew = key === 'all' ? ['AddressNew', 'City', 'State', 'ZipCode'] : [key];
        let errorsDataNew = errorsAnother ? errorsAnother : { AddressNew: '', City: '', State: '', ZipCode: '' };
        fieldsNew.forEach(fieldNew => {
            let loginFormelementsNew = addressNew.current;
            if (!loginFormelementsNew[fieldNew] || loginFormelementsNew[fieldNew].value.trim() === '') {
                errorsDataNew[fieldNew] = (fieldNew) + 'is required';
            }
            else {
                delete errorsDataNew[fieldNew];
            }
        });
        setErrorsAnother(Object.assign({}, errorsDataNew));
        if (Object.keys(errorsDataNew).length > 0) {
            props.onFormControlChange(true);
            return false;
        } else {
            props.onFormControlChange(false);

            return true;
        }
    };
    return (
        <div>
            <Container className="modal-container" maxWidth="md">
                <div className="about-yourself adult-household profile-content">
                    <div className="input-form-fields">
                        <div className="input-block">
                            <TextField
                                type='text'
                                name='AddressLine1'
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
                                type='text'
                                name='AddressLine1'
                                id="standard-basic"
                                label="Address Line 2"
                                className="input-field"
                            />
                        </div>

                        <div className="input-block">
                            <TextField
                                type='text'
                                name='City'
                                id="standard-basic"
                                label="City (Required)"
                                className="input-field"
                            />
                        </div>

                        <div className="input-block">
                            <TextField
                                type='text'
                                id="standard-basic"
                                className="input-field"
                                label="State (Required)"
                            />
                        </div>

                        <div className="input-block">
                            <TextField
                                name='mName'
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
            </Container>
        </div>
    );
};

export default ProviderAddress;
