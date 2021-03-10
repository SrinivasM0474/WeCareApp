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
import AppUser from '../images/tellus-title-icon.png';
import FillApp from '../images/fill-app.png';
import SubmitProof from '../images/submit-proof.png';
import SubmitApp from '../images/submit-app.png';
import InterviewApp from '../images/interview-app.png';
import Header from '../../components/Header';
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import NextImage from '../images/next-icon.png';
import '../style.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
})

class AppProcess extends React.Component {
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
                                        <h3>Here’s how Application process works.</h3>
                                    </div>
                                    <Typography variant="body1" className="" gutterBottom>
                                        Please click on all of the benefits that one or more people in your household would like to apply for. If needed, we will ask you to tell us which person or people would like to apply for that benefit.
                                    </Typography>
                                    <div className="data-container">
                                        <img src={FillApp} alt="Fill app" />
                                        <Typography variant="h6" className="" component="h6" gutterBottom>
                                            Fill an application
                                        </Typography>
                                        <Typography variant="body1" className="" gutterBottom>
                                            We’ll guide you step by step. This should take about 30 minutes.
                                        </Typography>
                                    </div>
                                    <div className="data-container">
                                        <img src={SubmitProof} alt="Fill app" />
                                        <Typography variant="h6" className="" component="h6" gutterBottom>
                                            Submit proof of your situation
                                        </Typography>
                                        <Typography variant="body1" className="" gutterBottom>
                                            This includes documents like your ID, paystubs, or rent receipts. You can do this during your application process.
                                        </Typography>
                                    </div>
                                    <div className="data-container">
                                        <img src={SubmitApp} alt="Fill app" />
                                        <Typography variant="h6" className="" component="h6" gutterBottom>
                                            Submit the application
                                        </Typography>
                                        <Typography variant="body1" className="" gutterBottom>
                                            Provide all the necessary information and documentation for faster application processing.
                                        </Typography>
                                    </div>
                                    <div className="data-container">
                                        <img src={InterviewApp} alt="Fill app" />
                                        <Typography variant="h6" className="" component="h6" gutterBottom>
                                            Do an interview with a county worker
                                        </Typography>
                                        <Typography variant="body1" className="" gutterBottom>
                                            Once you apply, you’ll need to do an interview over the phone or In-Person.
                                        </Typography>
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
                    <div className='d-flex justify-content-center'>
                        <button onClick={() => this.props.history.push("/app-benifits")} className='btn-nxt d-flex align-items-center'> <span>Next</span>
                            <img src={NextImage} alt='next' /></button>
                    </div>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AppProcess)

