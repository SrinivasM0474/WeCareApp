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
import { YES, NO } from "../../constants";
const AdditionalInformation = (props) => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [isPregnent, setIsPregnent] = React.useState(false);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleIspregnent = (value) => {
    if (value === "Yes") setIsPregnent(YES);
    else if (value === "No") setIsPregnent(NO);
  }

  return (
    <div>
      {/* Tell us more about you design */}
      <Container className="modal-container" maxWidth="md">
        <div className="about-yourself adult-household">
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
              <InputLabel className="input-label label-width">
                Is she pregnant ?
              </InputLabel>
              <div className="input-block gender-block">
                <div className="gender yes-no-block">
                  <ul>
                    <li onClick={() => { handleIspregnent("No") }} className={isPregnent === NO ? "selected" : ""}>No</li>
                    <li onClick={() => { handleIspregnent("Yes") }} className={isPregnent === YES ? "selected" : ""}>Yes</li>
                  </ul>
                </div>
              </div>
            </div>
            {isPregnent === YES &&
              <div className="full-width input-block about-date">
                <MuiPickersUtilsProvider
                  utils={DateFnsUtils}
                  className="full-width date m-0"
                >
                  <KeyboardDatePicker
                    margin="0"
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
