import React from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import InputLabelProps from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Navbar, Nav, Image } from 'react-bootstrap';
import AdminLogo from '../../images/footer_logo.png';
import Checkbox from '@material-ui/core/Checkbox';
import CommunityConnectImage from "../../../views/images/community_Connect_Logo.png";
import LoginImage from "../../../views/images/Login_image.png";
import AdminHeader from '../AdminHeader/AdminHeader';
import ProfileInformation from '../../../components/profileInformation';
import '../../style.css';
import Grid from '@material-ui/core/Grid';
import MailIcon from "@material-ui/icons/Mail";
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    labelRoot: {
        fontSize: 50,
    }
})

const classStyles = {
    root: {
        fontSize: 100
    },
    labelRoot: {
        fontSize: 50
    }
}


class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOPenModal: false };
    }
    newUser = () => {
        debugger;
        this.props.setIsNewUserFlag(true);
    }

    isOpenProfileModel = (isClosePopup) => {
        console.log(isClosePopup);
        this.setState({ isOPenModal: isClosePopup });
    }

    render() {
        return (
            <div className="">
                {/* <Container>
                    <div className="specer"></div>
                    <div className="content-body">
                        <AdminHeader />
                        <div className="login-form">
                            <form className="" noValidate autoComplete="off">
                                <TextField
                                    id="standard-basic"
                                    label="Email"
                                    className={styles.margin}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <EmailOutlinedIcon color="action" />
                                            </InputAdornment>
                                        ),
                                    }}


                                />
                                <TextField
                                    id="filled-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    className={styles.margin}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <LockOutlinedIcon color="action" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <div className="remeberme">
                                    <Checkbox

                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        label="Primary"
                                    />
                                 Remember me
                                </div>
                            </form>
                            <div>
                                <Link to={"/user-dashboard"}>
                                    <Button variant="contained" color="primary">
                                        Login
                                    </Button>
                                </Link>

                            </div>
                            <div class="login-help">
                                <div className="forgotpassword"><a href="#">Forgot Email ?</a> <a href="#">Forgot Password ?</a></div>
                            </div>
                            <h2><span class="line-center">OR</span></h2>
                            <div>
                                <h5 className="noaccount">No account yet? Click here to register!</h5>

                                <Button variant="contained" color="secondary" onClick={() => this.isOpenProfileModel(true)}>
                                    Signup with Email
                                    </Button>

                            </div>
                        </div>
                    </div>
                </Container>
                {this.state.isOPenModal && <ProfileInformation closeModal={() => { this.isOpenProfileModel(false) }} />} */}
                <Container className='p-0 login-container m-0'>
                    <AdminHeader />
                    <div className='login-account'>
                        <div className='login-logo'>
                            <img src={CommunityConnectImage} alt="communityConnect-logo" />
                        </div>
                        <div className='login-view'>
                            <div className='login-left'>
                                <img src={LoginImage} alt="LoginImage" />

                            </div>
                            <div className='login-right'>
                                <h4>Login to your Account</h4>
                                <div className="input-form-fields">
                                    <div className="input-block">
                                        <TextField
                                            name='fName'
                                            id="standard-basic"
                                            label="Email"
                                            className="input-field"
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                    <MailIcon className="icon" />
                                                  </InputAdornment>
                                                ),
                                              }} 
                                        />

                                    </div>
                                    <div className="input-block">
                                        <TextField
                                            id="standard-basic"
                                            label="Password"
                                            className="input-field"
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                    <VpnKeyIcon className="icon" />
                                                  </InputAdornment>
                                                ),
                                              }} 
                                        />
                                    </div>
                                </div>
                                <div className='d-flex links'>
                                    <Link to={"/user-dashboard"} className='b-l'>
                                        <Button color="primary" className='btn-login'>Login</Button>
                                    </Link>
                                    <div>
                                        <Link className='f-p'>Forgot Password?</Link> | <Link className='f-p' onClick={() => this.isOpenProfileModel(true)}>Sign up for New Account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer'>

                    </div>
                </Container>
                {this.state.isOPenModal && <ProfileInformation closeModal={() => { this.isOpenProfileModel(false) }} />}
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(LoginComponent)

