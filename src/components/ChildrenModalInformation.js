import React from 'react';
import { Container } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import './../views/style.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PersonalInformation from '../views/AdultsModal/PersonalInformation';
import ContactInformation from '../views/AdultsModal/ContactInformation';
import AdditionalInformation from '../views/AdultsModal/AdditionalInformation';
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import MaskedInput from 'react-text-mask';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CloseIcon from '@material-ui/icons/Close';
import HosueHoldAdultImage from './../views/images/modal-household-adults-icon.png';
import CancelImage from './../views/images/cancel-icon.png';
import SaveImage from './../views/images/modal-save-and-exit-icon.png';
import { GENDER_MALE, GENDER_OTHER, GENDER_FEMALE, YES, NO } from "../constants";

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
        paddingBottom: '20px'
        // padding: theme.spacing(2, 4, 3),
    },
}));


const ChildrenModalInformation = (props) => {
    const classes = useStyles();
    const [isActive, setIsActive] = React.useState(0);
    const [modalStyle] = React.useState(getModalStyle);
    const [isGender, setIsGender] = React.useState(false);
    const [isBenefits, setIsBenefits] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        props.closeModal(false);
        console.log('handleClose')
    };

    const handleGenderChange = (value) => {
        if (value === GENDER_FEMALE) setIsGender(GENDER_FEMALE);
        else if (value === GENDER_MALE) setIsGender(GENDER_MALE);
        else setIsGender(GENDER_OTHER);
    };
    const handleYesNo = (value) => {
        if (value === "Yes") setIsActive(YES);
        else if (value === "No") setIsActive(NO);
    }
    const handleBenefits = (value) => {
        if (value === "Yes") setIsBenefits(YES);
        else if (value === "No") setIsBenefits(NO);
    }
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
                            <img src={HosueHoldAdultImage} alt="adult" className='mh-img' />
                        </div>
                        <div className='header-text text-center'>
                            <h4>Household Children</h4>
                        </div>
                        <Container className="modal-container" maxWidth="md">
                            <form >
                                <div className="about-yourself adult-household profile-content adult-children">
                                    <div className="input-form-fields">
                                        <div className="full-width input-block">
                                            <FormControl className="full-width">
                                                <InputLabel className="input-label">What is your relationship to the adult you are about to provide data? (Required) </InputLabel>
                                                <Select className="text-left">
                                                    <MenuItem>One</MenuItem>
                                                    <MenuItem>One</MenuItem>
                                                    <MenuItem>One</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className="input-block">
                                            <TextField
                                                type='text'
                                                name='firstName'
                                                id="standard-basic"
                                                className="input-field"
                                                label="First Name (Required)"
                                                autoComplete='off'
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <FaceRoundedIcon className="icon" />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </div>

                                        <div className="input-block">
                                            <TextField
                                                name='mName'
                                                id="standard-basic"
                                                label="Middle Name"
                                                className="input-field"
                                                autoComplete='off'
                                            />
                                        </div>
                                        <div className="input-block">
                                            <TextField
                                                type='text'
                                                name='lastName'
                                                id="standard-basic"
                                                name='lastName'
                                                label="Last Name (Required)"
                                                className="input-field"
                                                autoComplete='off'
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <RecordVoiceOverIcon className="icon" />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </div>

                                        <div className="full-width input-block">
                                            <FormControl className="full-width">
                                                <InputLabel className="input-label">Suffix</InputLabel>
                                                <Select className="text-left">
                                                    <MenuItem>One</MenuItem>
                                                    <MenuItem>One</MenuItem>
                                                    <MenuItem>One</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className="full-width input-block about-date">
                                            <MuiPickersUtilsProvider
                                                utils={DateFnsUtils}
                                                className="full-width"
                                            >
                                                <KeyboardDatePicker
                                                    margin="normal"
                                                    id="dob"
                                                    label="Date of Birth"
                                                    format="MM/dd/yyyy"
                                                    KeyboardButtonProps={{
                                                        "aria-label": "change date",
                                                    }}
                                                />
                                            </MuiPickersUtilsProvider>
                                        </div>
                                        <div className="input-block gender-block p-t-16">
                                            <InputLabel className="input-label">Gender</InputLabel>
                                            <div className="gender">
                                                <ul>
                                                    <li
                                                        onClick={() => {
                                                            handleGenderChange("Female");
                                                        }}
                                                        className={isGender === GENDER_FEMALE ? "selected" : ""}
                                                    >
                                                        Female
                  </li>
                                                    <li
                                                        onClick={() => {
                                                            handleGenderChange("Male");
                                                        }}
                                                        className={isGender === GENDER_MALE ? "selected" : ""}
                                                    >
                                                        Male
                  </li>
                                                    <li
                                                        onClick={() => {
                                                            handleGenderChange("Other");
                                                        }}
                                                        className={isGender === GENDER_OTHER ? "selected" : ""}
                                                    >
                                                        Other
                  </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="input-block">
                                            <div className='floating_labels'>
                                                <MaskedInput
                                                    mask={[/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                                    className="floating-input"
                                                    // type={isType}
                                                    autoComplete='off'
                                                    guide={false}
                                                    id="my-input-id"
                                                    // onBlur={() => { }}
                                                    // onChange={(e) => { changeValids(e) }}
                                                    required
                                                />
                                                <label>SSN</label>
                                            </div>

                                        </div>
                                        <div className="about-origin">
                                            <p className="text">Does the child have any special needs ?</p>
                                            <div className="input-block gender-block">
                                                <div className="gender yes-no-block">
                                                    <ul>
                                                        <li onClick={() => { handleYesNo("No") }} className={isActive === NO ? "selected" : ""} >No</li>
                                                        <li onClick={() => { handleYesNo("Yes") }} className={isActive === YES ? "selected" : ""}  >Yes</li>

                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="about-origin">
                                            <p className="text">Are you applying for the benefits for this child ?</p>
                                            <div className="input-block gender-block">
                                                <div className="gender yes-no-block">
                                                    <ul>
                                                        <li onClick={() => { handleBenefits("No") }} className={isBenefits === NO ? "selected" : ""} >No</li>
                                                        <li onClick={() => { handleBenefits("Yes") }} className={isBenefits === YES ? "selected" : ""} >Yes</li>

                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Container>
                        <div className='children-btns'>
                            <Button className='create-accnt' onClick={handleClose}><img src={CancelImage} alt='cancel' width='20px' /> Cancel</Button>
                            <Button className='create-accnt'><img src={SaveImage} width='20px' alt='save' />Save</Button>
                        </div>

                    </div>
                </div>
            </Modal>
        </div>

    )
}

export default ChildrenModalInformation
