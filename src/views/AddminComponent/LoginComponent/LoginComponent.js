import React from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import InputLabelProps from  '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Navbar, Nav, Image } from 'react-bootstrap';
import AdminLogo from '../../images/footer_logo.png';
import Checkbox from '@material-ui/core/Checkbox';

import AdminHeader from '../AdminHeader/AdminHeader';

import '../../style.css';

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
        //this.state = {isNewUser:false};
    }
    newUser = () => {
        debugger;
        this.props.setIsNewUserFlag(true);
    }
    render(){
        return(
            <div className="graph-bg">
                <Container>
                    <div className="specer"></div>
                    <div className="content-body">
                        {/* <div className="admin-header login-header">
                            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                                <Navbar.Brand>
                                    <Image src={AdminLogo} fluid />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse className="" id="responsive-navbar-nav">
                                    <Nav className="">
                                        <Nav.Link className="nav-item"><Link to={"/"}><HomeOutlinedIcon fontSize="small" /> Home</Link></Nav.Link>
                                        <Nav.Link className="nav-item"><Link to={"/login-page"}><HelpOutlineOutlinedIcon fontSize="small" /> Help</Link></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div> */}
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
  <h2><span  class="line-center">OR</span></h2>
                            <div>
                            <h5 className="noaccount">No account yet? Click here to register!</h5>
                                <Link to={"/new-user"}>
                                    <Button variant="contained" color="secondary">
                                        Signup with Email
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(LoginComponent)

