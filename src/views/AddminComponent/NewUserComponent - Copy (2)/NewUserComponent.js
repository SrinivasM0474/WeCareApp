import React from 'react';
import { Container } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AdminHeader from "../AdminHeader/AdminHeader";
import RegistrationImg from '../../images/registration_img.png';
import ProfileComponent from "./StepComponents/ProfileComponent";
import ContactComponent from "./StepComponents/ContactComponent";
import AddressComponent from "./StepComponents/AddressComponent";
import SigninComponent from "./StepComponents/SigninComponent";

import '../../style.css';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
}));

const getSteps = () => {
    return ['Profile', 'Contact Information', 'Address', 'Sign-in Information'];
}
const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <ProfileComponent />;
      case 1:
        return <ContactComponent />;
      case 2:
        return <AddressComponent />;
      case 3:
        return <SigninComponent />;
      default:
        return 'Unknown stepIndex';
    }
}

const NewUserComponent = (props) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return(
        <div className="">
            <Container>
                <AdminHeader />
                <div className="new-user-steps">
                    <div className="registration-block">
                        <img src={RegistrationImg} alt="Registration Icon" />
                        <h4>Registration</h4>
                    </div>
                    <Stepper className="stper-pad" activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography className={classes.instructions}>All steps completed</Typography>
                                <Button onClick={handleReset}>Reset</Button>
                            </div>
                        ) : (
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    variant="contained"
                                    className="step-btn-bck"
                                >
                                    Back
                                </Button>
                                <Button variant="contained" className="step-btn-nxt" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div class="registarion_footer clear foot-spaces"></div>
            </Container>
        </div>
    );
}

export default NewUserComponent

