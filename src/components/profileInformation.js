import React from 'react';
import { Container } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AdminHeader from "./../views/AddminComponent/AdminHeader/AdminHeader";
import ProfileComponent from "./../views/AddminComponent/NewUserComponent/StepComponents/ProfileComponent";
import ContactComponent from "./../views/AddminComponent/NewUserComponent/StepComponents/ContactComponent";
import AddressComponent from "./../views/AddminComponent/NewUserComponent/StepComponents/AddressComponent";
import SigninComponent from "./../views/AddminComponent/NewUserComponent/StepComponents/SigninComponent";
import Modal from '@material-ui/core/Modal';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import './../views/style.css';
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
        borderRadius: '8px',
        paddingBottom: '24px'
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

const ProfileInformation = (props) => {
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
        props.closeModal(false);
        console.log('handleClose')
    };


    return (
        <div>
            <Modal
                open={true}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
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
                                                <div className='nav-btns'>
                                                    {/* <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                variant="contained"
                                                className="step-btn-bck"
                                            >
                                                Back
										</Button> */}
                                                    {activeStep !== 0 &&
                                                        <ArrowBackIcon onClick={handleNext} onClick={handleBack} className='icon-back'/>}
                                                    {activeStep === 3 && <Button className='create-accnt'>Create Account</Button>}
                                                    {activeStep !== 3 && <ArrowForwardIcon onClick={handleNext} className='icon-forward'/>}
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
            </Modal>
        </div>

    )
}

export default ProfileInformation
