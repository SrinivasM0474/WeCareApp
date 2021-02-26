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
import ProfileComponent from "./StepComponents/ProfileComponent";
import ContactComponent from "./StepComponents/ContactComponent";
import AddressComponent from "./StepComponents/AddressComponent";
import SigninComponent from "./StepComponents/SigninComponent";
import Modal from '@material-ui/core/Modal';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import '../../style.css';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
function getModalStyle() {
    const top = 50;
    const left = 50;
    console.log(top, left);
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    // instructions: {
    //     marginTop: theme.spacing(1),
    //     marginBottom: theme.spacing(1),
    // },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    paper: {
        position: 'absolute',
        width: '65%',
        height: 'auto',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        borderRadius: '8px'
        // padding: theme.spacing(2, 4, 3),
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
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
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
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className='profile-modal'>
                <div className='header-modal'>
                    <GroupAddOutlinedIcon />
                </div>
                <div className='header-text text-center'>
                    <h4>Build Your Profile</h4>
                    <Typography>This information will let us know more about you.</Typography>
                </div>

                <div className='modal-nav'>
                    <div className="new-user-steps">

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
                                        <div className={classes.instructions}>{getStepContent(activeStep)}</div>
                                        <div  className='nav-btns'>
                                            {/* <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                variant="contained"
                                                className="step-btn-bck"
                                            >
                                                Back
										</Button> */}
                                            <ArrowBackIcon onClick={handleNext} onClick={handleBack} />

                                            <ArrowForwardIcon onClick={handleNext} />
                                            {/* <Button variant="contained" className="step-btn-nxt" color="primary" onClick={handleNext}>
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button> */}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="graph-bg new-user">
            <div>
                <button type="button" onClick={handleOpen}>
                    Open Modal
      </button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
            </div>
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
                </div>
                <div class="registarion_footer clear foot-spaces"></div>
            </Container>
        </div>
    );
}

export default NewUserComponent

