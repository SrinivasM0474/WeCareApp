import React, { useState, useEffect } from "react";
import clsx from "clsx";
import ReactDOM from "react-dom";
import { Grid, TextField } from "@material-ui/core";
import useStyles from "./AboutYourselfForm.styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Person from "@material-ui/icons/Person";
import Face from "@material-ui/icons/Face";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import Wc from "@material-ui/icons/Wc";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Dialpad from "@material-ui/icons/Dialpad";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const AboutYourselfForm = (props) => {
  const { triggerValidation } = props;
  console.log(triggerValidation);
  const [triggerForm, setTriggerForm] = useState(false);
  const [formState, setFormState] = useState({
    yourSelfForm: {
      firstName: {
        elementType: "text",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      middleName: {
        elementType: "text",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: false,
        },
        valid: true,
        touched: false,
      },
      lastName: {
        elementType: "text",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      ssn: {
        elementType: "text",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: false,
        },
        valid: true,
        touched: false,
      },
      suffix: {
        elementType: "select",
        elementConfig: {
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
        },
        validation: {},
        value: null,
        valid: true,
      },
      dob: {
        elementType: "text",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "2017-05-24",
        validation: {
          required: true,
        },
        valid: true,
        touched: false,
      },
      gender: {
        elementType: "select",
        elementConfig: {
          options: [
            {
              value: 10,
              displayValue: "Male",
            },
            {
              value: 20,
              displayValue: "Female",
            },
            {
              value: 30,
              displayValue: "Transgender - Identify As Female",
            },
            {
              value: 40,
              displayValue: "Transgender - Identify As Male",
            },
            {
              value: 50,
              displayValue: "Client Declined to Answer",
            },
          ],
        },
        validation: {
          required: true,
        },
        value: null,
        valid: false,
      },
    },
    formIsValid: false,
  });
  const classes = useStyles();
  const inputChangedHandler = (event, inputIdentifier) => {
    console.log(event);
    const updatedFormElement = updateObject(
      formState.yourSelfForm[inputIdentifier],
      {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          formState.yourSelfForm[inputIdentifier].validation
        ),
        touched: true,
      }
    );

    const updatedYourSelfForm = updateObject(formState.yourSelfForm, {
      [inputIdentifier]: updatedFormElement,
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedYourSelfForm) {
      formIsValid = updatedYourSelfForm[inputIdentifier].valid && formIsValid;
    }
    setFormState({
      yourSelfForm: updatedYourSelfForm,
      formIsValid: formIsValid,
    });
    props.onFormControlChange(formIsValid);
    console.log(formState);
  };

  const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      if (typeof value === "string") {
        isValid = value.trim() !== "" && isValid;
      } else {
        isValid = value && isValid;
      }
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  };

  const updateObject = (oldObject, updatedProperties) => {
    return {
      ...oldObject,
      ...updatedProperties,
    };
  };

  // useEffect(() => {
  //   if (triggerValidation) {
  //     for (let inputIdentifier in formState.yourSelfForm) {
  //       formState.yourSelfForm[inputIdentifier].touched = true;
  //       formState.yourSelfForm[inputIdentifier].valid = checkValidity(
  //         formState.yourSelfForm[inputIdentifier].value,
  //         formState.yourSelfForm[inputIdentifier].validation
  //       );
  //     }
  //     setFormState(formState);
  //   }
  // }, [triggerValidation]);

  return (
    <>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "60px",
          fontColor: "black",
          fontFamily: "inherit",
          marginLeft: "15%",
          fontSize: "24px",
          color: "#d53f00",
        }}
      >
        Tell us about yourself
      </div>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        width="100%"
        style={{
          marginRight: "100px",
          marginLeft: "15%",
          marginTop: "30px",
        }}
      >
        <Grid item xs={6}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel>
              First Name* (Legally as it appears on your ID)
            </InputLabel>
            <Input
              type="text"
              value={formState["yourSelfForm"]["firstName"].value}
              id="firstname"
              error={
                !formState["yourSelfForm"]["firstName"].valid &&
                formState["yourSelfForm"]["firstName"].touched
              }
              endAdornment={
                <InputAdornment position="end">
                  <Face />
                </InputAdornment>
              }
              onChange={(e) => inputChangedHandler(e, "firstName")}
            />
            {!formState["yourSelfForm"]["firstName"].valid &&
              formState["yourSelfForm"]["firstName"].touched && (
                <FormHelperText> The First Name is Required</FormHelperText>
              )}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel>Middle Name</InputLabel>
            <Input
              id="middlename"
              type="text"
              value={formState["yourSelfForm"]["middleName"].value}
              onChange={(e) => inputChangedHandler(e, "middleName")}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel>
              Last Name* (Legally as it appears on your ID)
            </InputLabel>
            <Input
              id="lastname"
              type="text"
              value={formState["yourSelfForm"]["lastName"].value}
              error={
                !formState["yourSelfForm"]["lastName"].valid &&
                formState["yourSelfForm"]["lastName"].touched
              }
              endAdornment={
                <InputAdornment position="end">
                  <RecordVoiceOver />
                </InputAdornment>
              }
              onChange={(e) => inputChangedHandler(e, "lastName")}
            />
            {!formState["yourSelfForm"]["lastName"].valid &&
              formState["yourSelfForm"]["lastName"].touched && (
                <FormHelperText> The Last Name is Required </FormHelperText>
              )}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel id="suffix-label">Suffix</InputLabel>
            <Select
              labelId="suffix-label"
              id="suffix-select"
              value={formState["yourSelfForm"]["suffix"].value}
              endAdornment={
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              }
              onChange={(e) => inputChangedHandler(e, "suffix")}
            >
              {formState["yourSelfForm"]["suffix"].elementConfig.options.map(
                (option) => {
                  return (
                    <MenuItem key={option.value} value={option.value}>
                      {option.displayValue}
                    </MenuItem>
                  );
                }
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel id="gender-label">Gender*</InputLabel>
            <Select
              labelId="gender-label"
              id="gender-select"
              error={
                !formState["yourSelfForm"]["gender"].valid &&
                formState["yourSelfForm"]["gender"].touched
              }
              value={formState["yourSelfForm"]["gender"].value}
              onChange={(e) => inputChangedHandler(e, "gender")}
            >
              {formState["yourSelfForm"]["gender"].elementConfig.options.map(
                (option) => {
                  return (
                    <MenuItem key={option.value} value={option.value}>
                      {option.displayValue}
                    </MenuItem>
                  );
                }
              )}
            </Select>
            {!formState["yourSelfForm"]["gender"].valid &&
              formState["yourSelfForm"]["gender"].touched && (
                <FormHelperText> Gender is Required</FormHelperText>
              )}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel id="dob-label">Date of Birth*</InputLabel>
            <Input
              id="dob"
              labelId="dob-label"
              type="date"
              error={
                !formState["yourSelfForm"]["dob"].valid &&
                formState["yourSelfForm"]["dob"].touched
              }
              value={formState["yourSelfForm"]["dob"].value}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => inputChangedHandler(e, "dob")}
            />
            {!formState["yourSelfForm"]["dob"].valid &&
              formState["yourSelfForm"]["dob"].touched && (
                <FormHelperText> Date of Birth Required</FormHelperText>
              )}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel>SSN</InputLabel>
            <Input id="ssn" type="text" />
          </FormControl>
          {/* <TextField id="ssn" label="SSN XXX-XX-XXXX" fullWidth={true} /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default AboutYourselfForm;
