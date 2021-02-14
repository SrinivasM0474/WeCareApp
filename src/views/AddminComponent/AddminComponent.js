import React from 'react';
import { Container, Button, Box } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";

import AdminHeader from "./AdminHeader/AdminHeader";
import LoginComponent from "./LoginComponent/LoginComponent";
import NewUserComponent from "./NewUserComponent/NewUserComponent";

import '../style.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
      }
})

class AddminComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isNewUser:false};
    }
    getIsNewUserFlag = (isNewUserFlag) => {
        debugger;
        this.setState({isNewUser: isNewUserFlag})
    }
    render(){
        const { classes, theme } = this.props
        return(
            <div className={classes.root}>
                <Container>
                    <AdminHeader />
                    <div>
                        { (!this.state.isNewUser) ? <LoginComponent setIsNewUserFlag = {this.getIsNewUserFlag}/> : <NewUserComponent /> }
                    </div>
                    {/* <div class="registarion_footer"></div> */}
                </Container>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AddminComponent)


