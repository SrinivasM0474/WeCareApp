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
import BenefitsImage from '../images/benefits-title-icon.png';
import WorkingParent from '../images/workingparent.png';

import '../style.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
})

class Benefits extends React.Component {
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
                <Container>
                    <div className="login-container">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>

                                <div className="new-app-s">
                                    <div className="about-header d-flex">
                                        <span>
                                            <img src={BenefitsImage} alt="App usre" width='30' />
                                        </span>
                                        <h3>Benefits</h3>
                                    </div>
                                    <Typography variant="body1" className="" gutterBottom>
                                        Please click on all of the benefits that one or more people in your household would like to apply for. If needed, we will ask you to tell us which person or people would like to apply for that benefit.
                                    </Typography>
                                    <div className="data-container benefits">
                                        <img src={WorkingParent} alt="Fill app" />
                                        <Typography variant="h6" className="" component="h6" gutterBottom>
                                            Working Parents Assistance Program
                                        </Typography>
                                        <Typography variant="body1" className="assprogram" gutterBottom>
                                            Parents complete an application for the WPA program and a caseworker determines eligibility, based on income.
                                            Families whose income is under scale for WPA will be referred to CCSCentral to complete an application for the state Child
Care Subsidy Program (CCS).                                        </Typography>
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
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Benefits)

