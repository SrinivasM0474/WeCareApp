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
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import RecordVoiceOverOutlinedIcon from "@material-ui/icons/RecordVoiceOverOutlined";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import WcIcon from "@material-ui/icons/Wc";

const AboutYourSelfPageNew = (props) => {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(false);

  const handleClick = (buttonFlag) => {
    setIsActive(buttonFlag);
  };

  return (
    <Container maxWidth="md" className="container">
      <div className="about-yourself">
        <div className="about-header d-flex">
          <span>
            {" "}
            <PersonOutlineTwoToneIcon />
          </span>
          <h3>Tell us about yourself</h3>
        </div>
        <div className="input-form-fields">
          <div className="input-block">
            <TextField
              id="standard-basic"
              label="First Name(Required)"
              className="input-field"
            />
            <FaceRoundedIcon className="icon" />
          </div>
          <div className="input-block">
            <TextField
              id="standard-basic"
              label="Middle Name"
              className="input-field"
            />
          </div>
          <div className="input-block">
            <TextField
              id="standard-basic"
              label="Last Name(Required)"
              className="input-field"
            />
            <RecordVoiceOverOutlinedIcon className="icon" />
          </div>
          <div className="full-width input-block">
            <FormControl className="full-width">
              <InputLabel className="input-label">Suffix</InputLabel>
              <Select className="text-left">
                <MenuItem value={10}>Jr</MenuItem>
                <MenuItem value={20}>Sr</MenuItem>
                <MenuItem value={30}>II</MenuItem>
                <MenuItem value={30}>III</MenuItem>
                <MenuItem value={30}>IV</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="input-block gender-block">
            <InputLabel className="input-label">Gender</InputLabel>
            <div className="gender">
              <ul>
                <li className="selected">Female</li>
                <li>Male</li>
                <li>Other</li>
              </ul>
            </div>
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
  );
};

export default AboutYourSelfPageNew;
