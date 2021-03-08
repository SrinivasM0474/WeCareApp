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
import AboutYourHousehold from "../members/aboutYourHousehold";
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
import AboutYourSelf from "../headOfHousehold/aboutYourSelf";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PublishIcon from "@material-ui/icons/Publish";
import NotesIcon from "@material-ui/icons/Notes";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MoreAboutYou from "../headOfHousehold/moreAboutYou";
import AboutYourResidentialAddress from "../headOfHousehold/aboutYourResidentialAddress";
import AboutyourContactInformation from "../headOfHousehold/aboutYourContactInformation";
import Benefits from "../../pages/benefits/benefits";
import AbsentParent from "../../pages/AbsentParent/AbsentParent";
import NextImage from '../../views/images/next-icon.png';
import BackImage from '../../views/images/back-icon.png';
import BenefitsImage from '../../views/images/stepper/benefits-icon-o.png';
import AbsentParentIcon from '../../views/images/stepper/absentParent-icon-g.png';
import AgreementIcon from '../../views/images/stepper/agreement-icon-g.png';
import AssetsIcon from '../../views/images/stepper/assets-icon-g.png';
import AuthorizedIcon from '../../views/images/stepper/authorized-icon-g.png';
import ChildCareIcon from '../../views/images/stepper/childcare-icon-g.png';
import ExpensesIcon from '../../views/images/stepper/expenses-icon-g.png';
import HeadIcon from '../../views/images/stepper/head-icon-g.png';
import IncomeIcon from '../../views/images/stepper/income-icon-g.png';
import MenmbersIconG from '../../views/images/stepper/Members-icon-g.png';
import SubmitIcon from '../../views/images/stepper/submit-icon-g.png';
import SummayIconG from '../../views/images/stepper/summary-icon-g.png';
import SummaryIconW from '../../views/images/stepper/summary-icon-w.png';
import UploadIcon from '../../views/images/stepper/upload-icon-g.png';
import benifitsIconW from '../../views/images/stepper/benefits-icon-w.png';
import headIconO from '../../views/images/stepper/head-icon-o.png';
import headIconW from '../../views/images/stepper/head-icon-w.png';
import MembersIconO from '../../views/images/stepper/Members-icon-o.png';
import MembersIconW from '../../views/images/stepper/Members-icon-w.png';
import AbsentparentIconO from '../../views/images/stepper/absentparent-icon-o.png';




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
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
    border: '2px solid #cdcdcd',
    '& img': {
      width: '30px',
      height: '30px'
    }
  },
  active: {
    // backgroundImage:
    //   "linear-gradient( 136deg, rgb(15 114 188) 0%, rgb(15 114 188) 50%, rgb(15 114 188) 100%)",
    // boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    backgroundColor: "#fff",
    border: '2px solid #FB8C00',
  },
  completed: {
    // backgroundImage:
    //   "linear-gradient( 136deg, rgb(15 114 188) 0%, rgb(15 114 188) 50%, rgb(15 114 188) 100%)",
    backgroundColor: "#FB8C00",
    border: '2px solid #FB8C00',

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



const AboutYourselfPage = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [nextButtonClicked, setNextButtonClicked] = React.useState(false);
  const [imgIcon, setImgIcon] = React.useState({ benifitsImg: 0, headImg: 0, membersImg: 0, absentParentImg: 0 });
  const [page, setpages] = useState({ benefits: 0, household: 0, members: 0, absentParent: 0 })
  const steps = getSteps();
  const ColorlibStepIcon = (props: StepIconProps) => {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
    const icons: { [index: string]: React.ReactElement } = {
      1: <img src={imgIcon.benifitsImg === 0 ? BenefitsImage : benifitsIconW} />,
      2: <img src={imgIcon.headImg === 0 ? HeadIcon : imgIcon.headImg === 2 ? headIconW : headIconO} />,
      3: <img src={imgIcon.membersImg === 0 ? MenmbersIconG : imgIcon.membersImg === 1 ? MembersIconO : MembersIconW} />,
      4: <img src={imgIcon.absentParentImg === 0 ? AbsentParentIcon : AbsentparentIconO} />,
      5: <img src={ChildCareIcon} />,
      6: <img src={AuthorizedIcon} />,
      7: <img src={IncomeIcon} />,
      8: <img src={ExpensesIcon} />,
      9: <img src={AssetsIcon} />,
      10: <img src={UploadIcon} />,
      11: <img src={SummaryIconW} />,
      12: <img src={AgreementIcon} />,
      13: <img src={SubmitIcon} />,
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

  const handleNext = () => {

    if (activeStep === 0) {
      setFormIsValid(true);
      setImgIcon({
        benifitsImg: 1,
        headImg: 1,
        membersImg: 0,
        absentParentImg: 0
      })
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    if (activeStep === 1 && page.household === 3) {
      setImgIcon({
        benifitsImg: 1,
        headImg: 2,
        membersImg: 1,
        absentParentImg: 0
      })
    }
    if (activeStep === 2) {
      setImgIcon({
        benifitsImg: 1,
        headImg: 2,
        membersImg: 2,
        absentParentImg: 1
      })
    }
    if (activeStep === 3) {
      setImgIcon({
        benifitsImg: 1,
        headImg: 2,
        membersImg: 2,
        absentParentImg: 1
      })
    }
    if (activeStep === 1 && page.household < 2) setFormIsValid(true);
    if (activeStep === 1 && page.household < 3) {
      setpages((preVal) => {
        return {
          benefits: 0,
          household: (preVal.household) + 1,
          members: 0
        }
      });

    }
    if (page.household === 3) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

  };

  const handleBack = () => {
    console.log('>>>>>>>>.back setp', page, activeStep, imgIcon)
    if (imgIcon.benifitsImg) {
      setFormIsValid(false)
    }

    if (activeStep === 1 && page.household === 0) {
      setImgIcon({
        benifitsImg: 0,
        headImg: 0,
        membersImg: 0,
        absentParentImg: 0
      })

    }

    if (activeStep === 2 && page.household == 3) {
      setImgIcon({
        benifitsImg: 1,
        headImg: 1,
        membersImg: 0,
        absentParentImg: 0
      })
    }
    if (activeStep === 3) {
      setImgIcon({
        benifitsImg: 1,
        headImg: 2,
        membersImg: 1,
        absentParentImg: 0
      })
    }
    if (activeStep === 1 && page.household !== 0) {
      setFormIsValid(true)
      setpages((preVal) => {
        return {
          household: (preVal.household) - 1,
        }
      });

    } else {
      // setFormIsValid(true)
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }


  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onFormControlChangeHandler = (isFormValid) => {
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
                <Benefits />
                // <AboutYourSelfPageNew
                //   onFormControlChange={onFormControlChangeHandler}
                //   triggerValidation={nextButtonClicked}
                // />
              )}
              {activeStep === 1 && page.household === 0 &&

                <AboutYourSelf
                  onFormControlChange={onFormControlChangeHandler} />}
              {activeStep === 1 && page.household === 1 &&
                <AboutyourContactInformation
                  onFormControlChange={onFormControlChangeHandler}
                />}
              {/* {activeStep === 2 && <AddressForm />} */}
              {activeStep === 1 && page.household === 2 &&
                <AboutYourResidentialAddress
                  onFormControlChange={onFormControlChangeHandler}
                />}
              {activeStep === 1 && page.household === 3 && <MoreAboutYou
                onFormControlChange={onFormControlChangeHandler}
              />}
              {activeStep === 2 && <AboutYourHousehold />}
              {activeStep === 3 && <AbsentParent />}



              <div className={classes.buttons}>
                {activeStep !== 0 && <Button
                  // disabled={activeStep === 0}
                  variant="contained"
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  <img src={BackImage} alt='next' style={{ width: '24px', marginRight: '14px' }} /> <span>Back</span>
                </Button>}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  // disabled={formIsValid}
                  className={classes.nextButton}
                >
                  <span>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </span>{" "}
                  <img src={NextImage} alt='next' style={{ width: '24px', marginLeft: '14px' }} />
                  {/* <ArrowForwardIcon className="back-icon rotate-0" /> */}
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
