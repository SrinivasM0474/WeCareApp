
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

const PersonalInformation = (props) => {
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
    console.log(fields);
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
      <Container className="modal-container" maxWidth="md">
        <form ref={loginForm} >
          <div className="about-yourself adult-household profile-content">
            <div className="input-form-fields">
              <div className="full-width input-block">
                <FormControl className="full-width">
                  <InputLabel className="input-label">What is your relationship to the adult you are about to provide data? (Required) </InputLabel>
                  <Select className="text-left">
                    {formdata.suffix['options'].map((val) => {
                      return (
                        <MenuItem value={val.value}>{val.displayValue}</MenuItem>
                      )
                    })}

                  </Select>
                </FormControl>
              </div>
              <div className="input-block">
                <TextField
                  type='text'
                  name='firstName'
                  id="standard-basic"
                  className="input-field"
                  label="First Name (Required)"
                  autoComplete='off'
                  onBlur={() => { validate('firstName'); }}
                  error={errors && errors.firstName}
                  helperText={errors && errors.firstName ? "First Name is required" : ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <FaceRoundedIcon className="icon" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div className="input-block">
                <TextField
                  name='mName'
                  id="standard-basic"
                  label="Middle Name"
                  className="input-field"
                  autoComplete='off'
                />
              </div>
              <div className="input-block">
                <TextField
                  type='text'
                  name='lastName'
                  error={errors && errors.lastName}
                  id="standard-basic"
                  name='lastName'
                  label="Last Name (Required)"
                  className="input-field"
                  onBlur={() => { validate('lastName'); }}
                  autoComplete='off'
                  helperText={errors && errors.lastName ? "Last Name is required" : ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <RecordVoiceOverIcon className="icon" />
                      </InputAdornment>
                    ),
                  }}
                // onChange={(e) => {
                //   handleNameChange(e);
                // }}
                />
              </div>

              <div className="full-width input-block">
                <FormControl className="full-width">
                  <InputLabel className="input-label">Suffix</InputLabel>
                  <Select className="text-left">
                    {formdata.suffix['options'].map((val) => {
                      return (
                        <MenuItem value={val.value}>{val.displayValue}</MenuItem>
                      )
                    })}

                  </Select>
                </FormControl>
              </div>
              <div className="full-width input-block about-date">
                <MuiPickersUtilsProvider
                  utils={DateFnsUtils}
                  className="full-width"
                >
                  <KeyboardDatePicker
                    margin="normal"
                    id="dob"
                    label="Date of Birth"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <div className="input-block gender-block p-t-16">
                <InputLabel className="input-label">Gender</InputLabel>
                <div className="gender">
                  <ul>
                    <li
                      onClick={() => {
                        handleGenderChange("Female");
                      }}
                      className={isGender === GENDER_FEMALE ? "selected" : ""}
                    >
                      Female
                  </li>
                    <li
                      onClick={() => {
                        handleGenderChange("Male");
                      }}
                      className={isGender === GENDER_MALE ? "selected" : ""}
                    >
                      Male
                  </li>
                    <li
                      onClick={() => {
                        handleGenderChange("Other");
                      }}
                      className={isGender === GENDER_OTHER ? "selected" : ""}
                    >
                      Other
                  </li>
                  </ul>
                </div>
              </div>

              <div className="input-block">
                <div className='floating_labels'>
                  <MaskedInput
                    mask={[/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    className="floating-input"
                    // type={isType}
                    autoComplete='off'
                    guide={false}
                    id="my-input-id"
                    // onBlur={() => { }}
                    // onChange={(e) => { changeValids(e) }}
                    required
                  />
                  <label>SSN</label>
                </div>

              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default PersonalInformation;