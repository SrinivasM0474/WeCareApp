
import React, { useState } from "react";
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
// import FormData from "./Form";
import {
  HOME, MOBILE, WORK
} from "../../constants";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";


const ContactInformation = (props) => {
  const [isPhoneNo, setIsPhoneNO] = useState(false);

  const handlePhoneNoChange = (value) => {
    if (value === MOBILE) setIsPhoneNO(MOBILE);
    else if (value === HOME) setIsPhoneNO(HOME);
    else setIsPhoneNO(WORK);


  };


  const loginForm = React.useRef(null);
  // const classes = useStyles();
  const [errors, setErrors] = React.useState(null);

  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const validatecontact = (key) => {
    let fields = key === 'all' ? ['phoneno', 'Language', 'email'] : [key];
    let errorsData = errors ? errors : {};
    fields.forEach(field => {
      let loginFormelements = loginForm.current;
      if (!loginFormelements[field] || loginFormelements[field].value.trim() === '') {

        errorsData[field] = (field) + 'is required';
      }

      else {
        let emailValid = emailRegex.test(loginFormelements[field].value)

        if (field === 'email' && !emailValid) {
          return errorsData[field] = (field) + 'is required';
        }
        delete errorsData[field];
      }
    });
    setErrors(Object.assign({}, errorsData));
    if (Object.keys(errorsData).length > 0) {
      console.log('onchange')
      // props.onFormControlChange(true);
      return false;
    } else {
      // props.onFormControlChange(false);

      return true;
    }
  };

  return (
    <div>
      <Container className="modal-container" maxWidth="md">
        <div className="about-yourself adult-household">
          <div className="input-form-fields">

            <form ref={loginForm} >
              <div className="input-block">
                <TextField
                  type='text'
                  name='phoneno'
                  error={errors && errors.phoneno}
                  autoComplete='off'
                  id="standard-basic"
                  label="Phone (Required)"
                  className="input-field"
                  onBlur={() => { validatecontact('phoneno'); }}
                  helperText={errors && errors.phoneno ? "Phone no is required" : ""}
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

                      <li className="selected"
                        onClick={() => {
                          handlePhoneNoChange("Mobile");
                        }}
                        className={isPhoneNo === MOBILE ? "selected" : ""}>Mobile</li>
                      <li
                        className={isPhoneNo === HOME ? "selected" : ""}
                        onClick={() => {
                          handlePhoneNoChange("Home");
                        }}
                      >Home</li>
                      <li
                        className={isPhoneNo === WORK ? "selected" : ""}
                        onClick={() => {
                          handlePhoneNoChange("Work");
                        }}
                      >Work</li>
                    </ul>
                  </div>
                </div>

              </div>


              <div className="input-block">
                <TextField
                  type='text'
                  name='email'
                  autoComplete='off'
                  error={errors && errors.email}
                  onBlur={() => { validatecontact('email'); }}
                  id="standard-basic"
                  label="Email (Required)"
                  className="input-field"
                  helperText={errors && errors.email ? "email is required" : ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MailIcon className="icon" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactInformation;
