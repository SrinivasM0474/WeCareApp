import React, { useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./AboutYourselfPage.styles";
import Header from "../../components/Header";
import AboutYourselfForm from "../../forms/benefits/AboutYourselfForm";
import AddressForm from "../../forms/benefits/AddressForm";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ThreeDRotation from "@material-ui/icons/ThreeDRotation";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AdjustIcon from "@material-ui/icons/Adjust";
import AirplayIcon from "@material-ui/icons/Airplay";
import AppsIcon from "@material-ui/icons/Apps";
import { StepIconProps } from "@material-ui/core/StepIcon";
import StepConnector from "@material-ui/core/StepConnector";
import AboutYourSelfPageNew from "./aboutYourSelfPageNew";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PublishIcon from "@material-ui/icons/Publish";
import NotesIcon from "@material-ui/icons/Notes";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import TellUsMoreAboutYou from "./tellUsmoreaboutYou";
import TellResidentialAddress from "./tellResidentialAddress";
import TellContactInformation from "./tellContactInformation";
const styles = {
  width: "100%",
  height: "100%",
  // marginTop: "2px",
  top: "0px",
  left: "0px",
};

function getSteps() {
  return [
    "Benefits",
    "Head of Household",
    "Members",
    "Absent Parent",
    "Child Care Provider",
    "Authorized Representative",
    "Income",
    "Expenses",
    "Assets",
    "Upload",
    "Summary",
    "Agreement",
    "Submit",
  ];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return "Benefits";
    case 1:
      return "Head of Household";
    case 2:
      return "Members";
    case 3:
      return "Absent Parent";
    case 4:
      return "Child Care Provider";
    case 5:
      return "Authorized Representative";
    case 6:
      return "Income";
    case 7:
      return "Expenses";
    case 8:
      return "Assets";
    case 9:
      return "Upload";
    case 10:
      return "Summary";
    case 11:
      return "Agreement";
    case 12:
      return "Submit";
    default:
      return "";
  }
}
// const onFormControlChangeHandler = (isFormValid)=>{
//   console.log(isFormValid);
//   isFormValid = isFormValid;
// }

// function getStepComponent(stepIndex: number) {
//   switch (stepIndex) {
//     case 0:
//       return <AboutYourselfForm onFormControlChange={onFormControlChangeHandler}/>;
//     case 1:
//       return "Head of Household";
//     case 2:
//       return "Members";
//     case 3:
//       return "Authorized Representatives";
//     case 4:
//       return "Income";
//     case 5:
//       return "Expenses";
//     case 6:
//       return "Assets";
//     case 7:
//       return "File Upload";
//     case 8:
//       return "Review & Sumbit";
//     default:
//       return "";
//   }
// }
const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "white",
    width: 35,
    height: 35,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    // backgroundImage:
    //   "linear-gradient( 136deg, rgb(15 114 188) 0%, rgb(15 114 188) 50%, rgb(15 114 188) 100%)",
    // boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    backgroundColor: "#FB8C00",
  },
  completed: {
    // backgroundImage:
    //   "linear-gradient( 136deg, rgb(15 114 188) 0%, rgb(15 114 188) 50%, rgb(15 114 188) 100%)",
    backgroundColor: "#FB8C00",
  },
});

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 16,
  },
  active: {
    "& $line": {
      // backgroundImage:
      //   "linear-gradient( 136deg, rgb(15 114 188) 0%, rgb(15 114 188) 50%, rgb(15 114 188) 100%)",
      backgroundColor: "#FB8C00",
    },
  },
  completed: {
    "& $line": {
      // backgroundImage:
      //   "linear-gradient( 136deg, rgb(15 114 188) 0%, rgb(15 114 188) 50%, rgb(15 114 188) 100%)",
      backgroundColor: "#FB8C00",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#CDCDD2",
    borderRadius: 1,
  },
})(StepConnector);

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <PersonIcon />,
    2: <AccountCircleIcon />,
    3: <PersonAddIcon />,
    4: <AccountCircleIcon />,
    5: <ThreeDRotation />,
    6: <AccountCircleIcon />,
    7: <AdjustIcon />,
    8: <AirplayIcon />,
    9: <AppsIcon />,
    10: <PublishIcon />,
    11: <AppsIcon />,
    12: <AppsIcon />,
    13: <NotesIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const AboutYourselfPage = () => {
  const [formIsValid, setFormIsValid] = useState(true);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [nextButtonClicked, setNextButtonClicked] = React.useState(false);
  const[page, setpages]=useState({benefits:0,household:0,members:0})
  const steps = getSteps();

  const handleNext = () => {
if(activeStep===0){
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
  
}
if(activeStep===1&&page.household<2){
  setpages((preVal) => {
    return{
      benefits:0,
      household:(preVal.household)+1,
      members:0
    }    
  });

}
if(page.household===2){
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
}
    // if (!foifrmIsValid) {
    //   setNextButtonClicked(true);
    // } else {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // }
  };

  const handleBack = () => {
    if(activeStep===1&&page.household!==0){
      
      setpages((preVal) => {
        return{
          benefits:0,
          household:(preVal.household)-1,
          members:0
        }    
      });
    }else{
       setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
  const onFormControlChangeHandler = (isFormValid) => {
    console.log('>>>>>>>>>>>>',isFormValid)
    setFormIsValid(isFormValid);
    setNextButtonClicked(false);
  };
  return (
    <div style={styles}>
      <Header />
      {/* <div
        style={{
          marginTop: "70px",
          position: "relative",
          width: "30px",
          color: "red",
        }}
      >
        <div style={{ paddingTop: "50px" }}>Hello</div>
      </div> */}
      {/* <AboutYourselfForm className={classes.root} /> */}
      <div>
        {/* <div className={classes.greyBar}></div> */}
        <div className={classes.stepperBox}>
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            className={classes.stepper}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  <span className={classes.stepLabel}>{label}</span>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography> */}
              {/* {getStepComponent(activeStep)} */}
              {/* {activeStep === 0 && (
                <AboutYourselfForm
                  onFormControlChange={onFormControlChangeHandler}
                  triggerValidation={nextButtonClicked}
                />
              )} */}
             
              {activeStep === 0 && (
                <AboutYourSelfPageNew
                  onFormControlChange={onFormControlChangeHandler}
                  triggerValidation={nextButtonClicked}
                />
              )}
              {activeStep === 1 &&page.household===0&& <TellUsMoreAboutYou />}
              {activeStep === 1 && page.household===1&& <TellContactInformation />}
              {/* {activeStep === 2 && <AddressForm />} */}
              {activeStep === 1 &&page.household===2&& <TellResidentialAddress />}
              {activeStep === 2 && <AddressForm />}


              <div className={classes.buttons}>
                <Button
                  // disabled={activeStep === 0}
                  variant="contained"
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  <ArrowForwardIcon className="back-icon" /> <span>Back</span>
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                   disabled={formIsValid}
                  className={classes.nextButton}
                >
                  {console.log('formIsValid',formIsValid)}
                  <span>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </span>{" "}
                  <ArrowForwardIcon className="back-icon rotate-0" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AboutYourselfPage;
