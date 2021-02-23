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
import PersonalInformation from './../views/AdultsModal/PersonalInformation';
import ContactInformation from './../views/AdultsModal/ContactInformation';
import AdditionalInformation from './../views/AdultsModal/AdditionalInformation';
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
        width: '70%',
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
    const [activeStep, setActiveStep] = React.useState(0);
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
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
                            <h4>Household Children</h4>
                        </div>
                        <Container className="container" maxWidth="md">
                            <form >
                                <div className="about-yourself adult-household profile-content">
                                    <div className="input-form-fields">
                                        <div className="full-width input-block">
                                            <FormControl className="full-width">
                                                <InputLabel className="input-label">What is ypur relatioship to the adult you are about to provide data? (Required) </InputLabel>
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
                                                label="Last Name(Required)"
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
                                                    <li>  Female</li>
                                                    <li> Male </li>
                                                    <li> Other</li>
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
                                                        <li >Yes</li>
                                                        <li >No</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="about-origin">
                                            <p className="text">Are you applying for the benefits for this child ?</p>
                                            <div className="input-block gender-block">
                                                <div className="gender yes-no-block">
                                                    <ul>
                                                        <li >Yes</li>
                                                        <li >No</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Container>
                        <div className='children-btns'>
                            <Button className='create-accnt' onClick={handleClose}><CloseIcon className='save-icon'/> Cancel</Button>
                            <Button className='create-accnt'><span><BookmarkBorderIcon className='save-icon'/></span>Save</Button>
                        </div>

                    </div>
                </div>
            </Modal>
        </div>

    )
}

export default ChildrenModalInformation
