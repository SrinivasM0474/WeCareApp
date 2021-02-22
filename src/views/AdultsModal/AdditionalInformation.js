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
const AdditionalInformation = (props) => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const [isOrigin, setOrigin] = React.useState(false);

  const [isPregnent, setIsPregnent] = React.useState(false);


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const handleOrigin = (value) => {
    if (value === "Yes") setOrigin(true);
    else if (value === "No") setOrigin(false);
  };

  const handleIspregnent = (value) => {
    if (value === "Yes") setIsPregnent(true);
    else if (value === "No") setIsPregnent(false);
  }

  return (
    <div>
      {/* Tell us more about you design */}
      <Container className="container" maxWidth="md">
        <div className="about-yourself">
          <div className="input-form-fields">

            <div className="full-width input-block">
              <FormControl className="full-width">
                <InputLabel className="input-label">
                  What is your Citizenship Status?
                </InputLabel>
                <Select className="text-left">
                  <MenuItem value={10}>One</MenuItem>
                  <MenuItem value={20}>Two</MenuItem>
                  <MenuItem value={30}>Three</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="full-width input-block">
              <FormControl className="full-width">
                <InputLabel className="input-label">
                  What language so they prefer? (Required)
                </InputLabel>
                <Select className="text-left">
                  <MenuItem value={10}>One</MenuItem>
                  <MenuItem value={20}>Two</MenuItem>
                  <MenuItem value={30}>Three</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="about-origin">
              <p className="text">Are you Pregnant?</p>
              <div className="input-block gender-block">
                <div className="gender yes-no-block">
                  <ul>
                    <li onClick={() => { handleIspregnent("No") }} className={isPregnent ? "" : "selected"}>No</li>
                    <li onClick={() => { handleIspregnent("Yes") }} className={isPregnent ? "selected" : ""}>Yes</li>
                  </ul>
                </div>
              </div>
            </div>
            {isPregnent && 
            <div className="full-width input-block about-date">
            <MuiPickersUtilsProvider
              utils={DateFnsUtils}
              className="full-width"
            >
              <KeyboardDatePicker
                margin="normal"
                id="dob"
                label="What is her due date?"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
            }
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdditionalInformation;
