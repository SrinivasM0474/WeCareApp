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
import { YES, NO } from "../../constants";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import AppUser from '../../views/images/tellus-title-icon.png';
import ZipImage from '../../views/images/zip-icon.png';
import AddressImage from '../../views/images/address-icon.png';

import AboutYourResidentialAddressForm from '../../forms/headOfHouseHold/aboutYourResidentialAddressForm';

const AboutYourResidentialAddress = (props) => {
  const [isAnotherAddress, setIsAnotherAddress] = React.useState(false);

  const handleAnotherAddress = (value) => {
    if (value === YES) {
      setIsAnotherAddress(YES);
      props.onFormControlChange(true);
    }
    else if (value === NO) {
      if (errors !== null && Object.keys(errors).length === 0) {
        props.onFormControlChange(false);
      }
      setIsAnotherAddress(NO);
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
      console.log('dddddddddddddd', errors)
      props.onFormControlChange(false);
      return true;
    }
  };
  return (
    <div>
      <AboutYourResidentialAddressForm />
    </div>
  );
};

export default AboutYourResidentialAddress;
