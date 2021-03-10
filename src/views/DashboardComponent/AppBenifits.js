import React from 'react';
import { Link } from "react-router-dom";
import { Container, Button, Grid } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

// import HeaderLogo from '../images/new_logo.png';
// import PageLogo from '../images/page_logo.png';
// import LoginImg from '../images/login_img.png';
// import AppUser from '../images/application_user.png';
import AppUser from '../images/tellus-title-icon.png';

// import FillApp from '../images/fill-app.png';
import NextImage from '../images/next-icon.png';

import Header from '../../components/Header';
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import '../style.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
})

class AppBenifits extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        email: "",
        emailErr: "",
        Validemail: "temp"
    }
    newUser = () => {
        this.props.setIsNewUserFlag(true);
    }
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        if (this.state.email.indexOf("@") === -1) {
            this.state.emailErr = "Requires valid email";
            this.state.Validemail = "";
        } else {
            this.state.Validemail = e.target.value;
            this.state.emailErr = ""
        }
    }
    render() {
        return (
            <div className="">
                <Header />

                <Container className='p-0'>
                    <div className="login-container">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <div className="new-app-s">
                                    <div className="about-header d-flex">
                                        <span>
                                            <img src={AppUser} alt="App usre" width='30' />
                                        </span>
                                        <h3>  Do you wish to designate an authorized representative to assist you with your application or benefits?</h3>
                                    </div>
                                    <div className="">
                                        <Typography variant="body1" className="fs17" gutterBottom>
                                            You can allow the authorized representative to do any or all of the following:
                                        </Typography>
                                        <ul>
                                            <li>Be an Authorized Representative on your application.</li>
                                            <li>Assist with the application process and complete forms. </li>
                                            <li>Speak to the county about your application.</li>
                                            <li>Report changes on your behalf.</li>
                                        </ul>
                                        <Typography variant="body1" className="fs17" gutterBottom>
                                            If yes, we are required to collect their name and their respective details to submit this application.
                                        </Typography>
                                    </div>
                                    <div className="gender yes-no-block">
                                        <ul>
                                            <li className="">Yes</li>
                                            <li>No</li>
                                        </ul>
                                    </div>
                                    {/* <div>
                                        <Button variant="contained" color="secondary">
                                            Next
                                        </Button>
                                    </div> */}
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
                <div className='d-flex justify-content-center'>
                    <button onClick={() => this.props.history.push("/aboutyou")} className='btn-nxt d-flex align-items-center'> <span>Next</span>
                        <img src={NextImage} alt='next' /></button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AppBenifits)

