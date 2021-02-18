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
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const TellResidentialAddress = (props) => {
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
            <div className="input-block">
              <TextField
                id="standard-basic"
                label="Address Line 1 (Required)"
                className="input-field"
              />
              <PinDropSharpIcon className="icon" />
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
              />
              <HomeSharpIcon className="icon" />
            </div>
            <div className="about-origin">
              <p className="text">
                Is there another address that we should send mail to?
              </p>
              <div className="input-block gender-block">
                <div className="gender yes-no-block">
                  <ul>
                    <li className="selected">Yes</li>
                    <li>No</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="input-block">
              <TextField
                id="standard-basic"
                label="Address Line 1 (Required)"
                className="input-field"
              />
              <PinDropSharpIcon className="icon" />
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
              />
              <HomeSharpIcon className="icon" />
            </div> 
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TellResidentialAddress;
