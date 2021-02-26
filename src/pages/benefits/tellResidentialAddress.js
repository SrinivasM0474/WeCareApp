import React from "react";

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
import { YES,NO } from "../../constants";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const TellResidentialAddress = (props) => {
  const [isAnotherAddress, setIsAnotherAddress] = React.useState(false);
 
  const handleAnotherAddress  = (value) => {
    if (value === YES) {setIsAnotherAddress(YES);
      props.onFormControlChange(true);
    }
    else if (value === NO){ 
      if (errors!==null&&Object.keys(errors).length ===0) {
        props.onFormControlChange(false);
      }     
      setIsAnotherAddress(NO);}
  }
  const loginForm = React.useRef(null);
  const addressNew = React.useRef(null);


  //Variable declarations
  const [errors, setErrors] = React.useState(null);
  const [errorsAnother, setErrorsAnother] = React.useState(null);
  const validate = (key) => {
    let fields = key === 'all' ? ['AddressLine1', 'City','State','ZipCode'] : [key];
    let errorsData = errors ? errors : {AddressLine1:'',City:'',State:'',ZipCode:''};
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
    let fieldsNew = key === 'all' ? ['AddressNew', 'City','State','ZipCode'] : [key];
    let errorsDataNew = errorsAnother ? errorsAnother : {AddressNew:'',City:'',State:'',ZipCode:''};
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
      console.log('dddddddddddddd',errors)         
         props.onFormControlChange(false);   
    
      return true;
    }
  };
  return (
    <div>
      <Container className="container" maxWidth="md">
        <div className="about-yourself">
          <div className="about-header d-flex">
            <span>
              {" "}
              <PersonOutlineTwoToneIcon />
            </span>
            <h3>Tell us about your Residential Address</h3>
          </div>
         
          <div className="input-form-fields">
          <form ref={loginForm} >
            <div className="input-block">
              <TextField
               type='text'
               name='AddressLine1'
                id="standard-basic"
                label="Address Line 1 (Required)"
                className="input-field"
                autoComplete='off'
                onBlur={() => { validate('AddressLine1'); }}
                onChange={() => { validate('AddressLine1'); }}
                
                 error={errors && errors.AddressLine1}
                helperText={errors && errors.AddressLine1 ? "Address Line 1 is required" : ""}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PinDropSharpIcon className="icon" />
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
                autoComplete='off'
              />
            </div>

            <div className="input-block">
              <TextField
              type='text'
               name='City'
                id="standard-basic"
                label="City (Required)"
                className="input-field"
                autoComplete='off'
                onBlur={() => { validate('City'); }}
                onChange={() => { validate('City'); }}
                 error={errors && errors.City}
                helperText={errors && errors.City ? "City is required" : ""}
              />
            </div>

            <div className="input-block">
              <TextField
              type='text'
              name='State'
                id="standard-basic"
                label="State (Required)"
                className="input-field"
                autoComplete='off'
                onBlur={() => { validate('State'); }}
                onChange={() => { validate('State'); }}
                 error={errors && errors.State}
                helperText={errors && errors.State ? "State is required" : ""}
              />
            </div>

            <div className="input-block">
              <TextField
               type='text'
               name='ZipCode'
                id="standard-basic"
                label="Zip Code (Required)"
                className="input-field"
                autoComplete='off'
                onBlur={() => { validate('ZipCode'); }}
                onChange={() => { validate('ZipCode'); }}
                 error={errors && errors.ZipCode}
                helperText={errors && errors.ZipCode ? "Zip Code is required" : ""}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <HomeSharpIcon className="icon" />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            </form>
            <div className="about-origin">
              <p className="text">
                Is there another address that we should send mail to?
              </p>
              <div className="input-block gender-block">
                <div className="gender yes-no-block">
                  <ul>
                  <li onClick={() => { handleAnotherAddress("No") }} className={isAnotherAddress ===NO? "selected" : ""}>No</li>
                    <li  onClick={() => { handleAnotherAddress("Yes") }} className={isAnotherAddress ===YES? "selected" : ""}>Yes</li>
                    
                  </ul>
                </div>
              </div>
              
            </div>
            {isAnotherAddress===YES&&
            <div>
                 <form ref={addressNew} >
              <div className="input-block">
              <TextField
               type='text'
               name='AddressNew'
                id="standard-basic"
                label="Address Line 1 (Required)"
                className="input-field"
                autoComplete='off'
                onBlur={() => { validateAnother('AddressNew'); }}
                onChange={() => { validateAnother('AddressNew'); }}
                 error={errorsAnother && errorsAnother.AddressNew}
                helperText={errorsAnother && errorsAnother.AddressNew ? "Address Line 1 is required" : ""}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PinDropSharpIcon className="icon" />
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
               type='text'
               name='City'
                id="standard-basic"
                label="City (Required)"
                className="input-field"
                autoComplete='off'
                onBlur={() => { validateAnother('City'); }}
                onChange={() => { validateAnother('City'); }}

                 error={errorsAnother && errorsAnother.City}
                helperText={errorsAnother && errorsAnother.City ? "City is required" : ""}
              />
            </div>
            <div className="input-block">
              <TextField
               type='text'
               name='State'
                id="standard-basic"
                label="State (Required)"
                className="input-field"
                autoComplete='off'
                onBlur={() => { validateAnother('State'); }}
                onChange={() => { validateAnother('State'); }}
                 error={errorsAnother && errorsAnother.State}
                helperText={errorsAnother && errorsAnother.State ? "State is required" : ""}
              />
            </div>
            <div className="input-block">
              <TextField
               type='text'
               name='ZipCode'
                id="standard-basic"
                label="Zip Code (Required)"
                className="input-field"
                autoComplete='off'
                onBlur={() => { validateAnother('ZipCode'); }}
                onChange={() => { validateAnother('ZipCode'); }}

                 error={errorsAnother && errorsAnother.ZipCode}
                helperText={errorsAnother && errorsAnother.ZipCode ? "Zip Code is required" : ""}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <HomeSharpIcon className="icon" />
                    </InputAdornment>
                  ),
                }}
              />
            </div> 
            </form>
            </div>
            }
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TellResidentialAddress;
