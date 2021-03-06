
import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Help from "@material-ui/icons/Help";
import useStyles from "../../forms/benefits/AddressForm.styles";
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
import FormData from "./Form";
import {
  HOME, MOBILE, WORK, INTERPRETERNO, INTERPRETERYES,
  COMMUNICATE_EMAIL, COMMUNICATE_PHONE, COMMUNICATE_MAIL,
  ACCOMMODATIONS_NO, ACCOMMODATIONS_YES, INTERPRETER_NO, INTERPRETER_YES
} from "../../../src/constants";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import MaskedInput from 'react-text-mask';
import AppUser from '../../views/images/tellus-title-icon.png';
import IconLanguage from '../../views/images/language-icon.png';

const TellContactInformation = (props) => {
  const [isPhoneNo, setIsPhoneNO] = useState(null);
  const [isInterpreter, setIsInterpreter] = useState(false);
  const [isCommunicate, setIsCommunicate] = useState(false);
  const [isAccommodations, setIsAccommodations] = useState(false);
  const [phoneNo, setPoneNO] = useState(null)

  const handlePhoneNoChange = (value) => {
    if (value === MOBILE) setIsPhoneNO(MOBILE);
    else if (value === HOME) setIsPhoneNO(HOME);
    else setIsPhoneNO(WORK);


  };

  const handleInterpreterChange = (value) => {
    if (value === INTERPRETER_YES) setIsInterpreter(INTERPRETER_YES);
    else setIsInterpreter(INTERPRETER_NO);


  };
  const handlecommunicateChange = (value) => {
    if (value === COMMUNICATE_MAIL) setIsCommunicate(COMMUNICATE_MAIL);
    else if (value === COMMUNICATE_PHONE) setIsCommunicate(COMMUNICATE_PHONE);
    else setIsCommunicate(COMMUNICATE_EMAIL);


  };
  const handleAccommodationsChange = (value) => {
    if (value === ACCOMMODATIONS_NO) setIsAccommodations(ACCOMMODATIONS_NO);
    else setIsAccommodations(ACCOMMODATIONS_YES);


  };
  const loginForm = React.useRef(null);
  const classes = useStyles();
  const [errors, setErrors] = React.useState(null);

  const emailRegex = RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const validatecontact = (key) => {
    let fields = key === 'all' ? ['language', 'email'] : [key];
    let errorsData = errors ? errors : { language: '', email: '' };
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
    console.log(errorsData, 'errorsData')
    if (Object.keys(errorsData).length > 0) {
      props.onFormControlChange(true);
      return false;
    }
    else {
      if (phoneNo) {
        props.onFormControlChange(false);
      }
      else {
        props.onFormControlChange(true);
      }
      return true;
    }
  };
  const changeValids = (e) => {
    if (e.target.value.length === 12) {
      setPoneNO(e.target.value)
      return errors !== null ? props.onFormControlChange(false) : props.onFormControlChange(true);
    }
    else {
      setPoneNO('')
      props.onFormControlChange(true)
    }

  }

  return (
    <div>
      <Container className="container" maxWidth="md">
        <div className="about-yourself">
          <div className="about-header d-flex">
            <span>
              <img src={AppUser} alt="App usre" width='30' />
            </span>
            <h3>Tell us about your contact information</h3>
          </div>
          <div className="input-form-fields">
            <div className="input-block gender-block p-t-16">
              <InputLabel className="input-label label-width">
                Choose your Primary Phone Number
              </InputLabel>
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
            <form ref={loginForm} >
              <div className="input-block">
                <div className={phoneNo === '' ? "floating_labels phone-bg phone-error" : 'floating_labels phone-bg'}>
                  <MaskedInput
                    mask={[/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    className='floating-input'
                    autoComplete='off'
                    guide={false}
                    id="my-input-id"
                    // onBlur={() => { }}
                    // onChange={(e) => { changeValids(e) }}
                    onChange={(e) => { changeValids(e) }}
                    required
                  />
                  <label>Phone (Required)</label>
                  <span>{phoneNo === '' ? "Phone number is required" : ''}</span>
                </div>
                {/* <TextField
                  type='text'
                  name='phoneno'
                  error={errors && errors.phoneno}
                  autoComplete='off'
                  id="standard-basic"
                  label="Phone (Required)"
                  className="input-field"
                  onBlur={() => { validatecontact('phoneno'); }}
                  onBlur={() => { validatecontact('phoneno'); }}
                  helperText={errors && errors.phoneno ? "Phone no is required" : ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneInTalkSharpIcon className="icon" />
                      </InputAdornment>
                    ),
                  }}
                /> */}
              </div>

              <div className="input-block">
                <TextField
                  type='text'
                  name='email'
                  autoComplete='off'
                  error={errors && errors.email}
                  onBlur={() => { validatecontact('email'); }}
                  onChange={() => { validatecontact('email'); }}
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

              <div className="input-block">
                <TextField
                  type='text'
                  name='language'
                  error={errors && errors.language}
                  autoComplete='off'
                  id="standard-basic"
                  label="Preferred Language (Required)"
                  className="input-field"
                  helperText={errors && errors.language ? "Language is required" : ""}
                  onBlur={() => { validatecontact('language'); }}
                  onChange={() => { validatecontact('language'); }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {/* <LanguageIcon className="icon" /> */}
                        <img src={IconLanguage} />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </form>
            <div className="input-block gender-block p-t-16">
              <InputLabel className="input-label label-width">
                Do you need an Interpreter?
              </InputLabel>
              <div className="gender">
                <ul>
                  <li className={isInterpreter === INTERPRETER_NO ? "selected" : ""}
                    onClick={() => {
                      handleInterpreterChange("InterpreterNo");
                    }}>No</li>
                  <li
                    className={isInterpreter === INTERPRETER_YES ? "selected" : ""}
                    onClick={() => {
                      handleInterpreterChange("InterpreterYes");
                    }}
                  >Yes</li>
                </ul>
              </div>
            </div>

            <div className="input-block gender-block p-t-16">
              <InputLabel className="input-label label-width">
                How do you want us to communicate?
              </InputLabel>
              <div className="gender">
                <ul>
                  <li className={isCommunicate === COMMUNICATE_EMAIL ? "selected" : ""}
                    onClick={() => {
                      handlecommunicateChange("CommunicateEmail");
                    }}>Email</li>
                  <li
                    className={isCommunicate === COMMUNICATE_PHONE ? "selected" : ""}
                    onClick={() => {
                      handlecommunicateChange("CommunicatePhone");
                    }}
                  >Phone</li>
                  <li
                    className={isCommunicate === COMMUNICATE_MAIL ? "selected" : ""}
                    onClick={() => {
                      handlecommunicateChange("CommunicateMail");
                    }}
                  >Mail</li>
                </ul>
              </div>
            </div>

            <div className="input-block gender-block p-t-16">
              <InputLabel className="input-label label-width">
                Do you need any accommodations ?
              </InputLabel>
              <div className="gender">
                <ul>
                  <li
                    className={isAccommodations === ACCOMMODATIONS_NO ? "selected" : ""}
                    onClick={() => {
                      handleAccommodationsChange("AccommodationsNo");
                    }}
                  >No</li>
                  <li className={isAccommodations === ACCOMMODATIONS_YES ? "selected" : ""}
                    onClick={() => {
                      handleAccommodationsChange("AccommodationsYes");
                    }}>Yes</li>
                </ul>
              </div>
            </div>
            {isAccommodations === ACCOMMODATIONS_YES && <div className="input-block">
              <TextField
                id="standard-basic"
                label="What kind of accommodations do you need?"
                className="input-field"
              />
            </div>}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TellContactInformation;
