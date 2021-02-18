import React, { useState } from "react";
import clsx from "clsx";
import { Grid, TextField } from "@material-ui/core";
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
import { GENDER_MALE, GENDER_OTHER,GENDER_FEMALE } from "../../../src/constants";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const AboutYourSelfPageNew = (props) => {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(false);
  const [isGender, setIsGender] = useState(false);
  const [isValue, setIsValue] = useState({firstName:true,lastName:true});
  const [formdata,setFormdata]=useState({
    fName:'',    
    mName:'',
    lName:'',
    date:'',
    ssn:'',
  error:true,
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

  const handleClick = (buttonFlag) => {
    setIsActive(buttonFlag);
  };
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleNameChange = (e) => {    
    var value = e.target.value;
    var name=e.target.name;
       if (value === ''&&name==='firstName'){             
        setIsValue((pre)=>{return{...pre, firstName:true}})
        
          
    } else if(value!== ''&&name==='firstName'){
      setIsValue((pre)=>{return{...pre, firstName:false}}) 
      
    }
    else if (value === ""&&name==='lastName'){        
      setIsValue((pre)=>{return{...pre, lastName:true}})
      
         
     } 
     else if(value!== ''&&name==='lastName'){
      setIsValue((pre)=>{return{...pre, lastName:false}})  
     
    }
   

  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
 
  const handleGenderChange = (value) => {
    if (value === GENDER_FEMALE) setIsGender(GENDER_FEMALE);
    else if (value === GENDER_MALE) setIsGender(GENDER_MALE);
    else setIsGender(GENDER_OTHER);
    if(!isValue.firstName&&!isValue.lastName){
      props.onFormControlChange(false);
    }
    
  };
  
  return (
    <div>
      <Container className="container" maxWidth="md">
        <div className="about-yourself">
          <div className="about-header d-flex">
            <span>
              {" "}
              <PersonIcon />
            </span>
            <h3>Tell us about yourself</h3>
          </div>
          <div className="input-form-fields">
          <div className="input-block">
              <TextField
                error={isValue.firstName}
                id="standard-basic"
                name='firstName'
                label="First Name (Required)"
                className="input-field"
                helperText={isValue.firstName ? "The First Name is required" : ""}
                onChange={(e) => {
                  handleNameChange(e);
                }}
              />
              <FaceRoundedIcon className="icon" />
            </div>
            
           
            <div className="input-block">
              <TextField
              name='mName'
              value={formdata.mName}
                id="standard-basic"
                label="Middle Name"
                className="input-field"
               
              />
            </div>
            <div className="input-block">
              <TextField
               error={isValue.lastName}
               id="standard-basic"
              name='lastName'
               id="standard-basic"
                label="Last Name(Required)"
                className="input-field"
                helperText={isValue.lastName ? "Last Name is required" : ""}
                onChange={(e) => {
                  handleNameChange(e);
                }}
              />
              <RecordVoiceOverIcon className="icon" />
            </div>
            
            <div className="full-width input-block">
              <FormControl className="full-width">
                <InputLabel className="input-label">Suffix</InputLabel>
                <Select className="text-left">
                  {formdata.suffix['options'].map((val)=>{
                    return(
                   <MenuItem value={val.value}>{val.displayValue}</MenuItem>
                    )
                  })}
                 
                </Select>
              </FormControl>
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
            <div className="input-block">
              <TextField
                id="standard-basic"
                label="SSN"
                className="input-field"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutYourSelfPageNew;
