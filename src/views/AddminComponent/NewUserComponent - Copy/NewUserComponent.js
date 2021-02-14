import React from 'react';
import { Container } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AdminHeader from "../AdminHeader/AdminHeader";
import RegistrationImg from '../../images/registration_img.png';
import ProfileComponent from "../NewUserComponent/ProfileComponent/ProfileComponent";

import '../../style.css';
import { Link } from 'react-router-dom';

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
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const getSteps = () => {
    return ['Profile', 'Contact Information', 'Address', 'Sign-in Information'];
}
const profileContent = () => {
    return(
        <div className="profile-content">
        <form className="" noValidate autoComplete="off">
            <TextField 
                id="firstName" 
                label="First Name" 
                required
            />
            <TextField
                id="middleName"
                label="Middle Name"
                required
            />
            <TextField
                id="lastName"
                label="Last Name"
                required
            />
            <TextField
                id="date"
                label="Date of Birth"
                type="date"
                InputLabelProps={{
                    shrink: true,
                    required: true
                }}
            />
        </form>
    </div>
    )
}
const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return  <ProfileComponent />;
      case 1:
        return 'Contact Information';
      case 2:
        return 'Address';
      case 3:
        return 'Sign-in Information';
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
        <div className="graph-bg new-user">
            <Container>
                <div className="specer"></div>
                <div className="content-body">
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
                                        className={classes.backButton}
                                    >
                                        Back
                                    </Button>
                                    
                                    {activeStep === steps.length - 1 ? 
                                        <Link to={"/login-page"}><Button variant="contained" color="primary" onClick={handleNext}>Finish</Button></Link> 
                                        : 
                                        <Button variant="contained" color="primary" onClick={handleNext}>Next</Button> 
                                    }
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default NewUserComponent

