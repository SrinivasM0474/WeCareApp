import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import { Navbar, Nav, Image } from "react-bootstrap";
import AdminLogo from "../../images/footer_logo.png";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MotogomeryLogo from "../../images/motogomery_logo.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const AdminHeader = (props) => {
  const classes = useStyles();
  return (
    // <Grid container xs="12">
    //     <div className="admin-header">
    //         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //             <Navbar.Brand>
    //                 <Image src={AdminLogo} fluid />
    //             </Navbar.Brand>
    //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //             <Navbar.Collapse className="" id="responsive-navbar-nav">
    //                 <Nav className="">
    //                     <Nav.Link className="nav-item"><Link to={"/"}><HomeOutlinedIcon fontSize="small" /> Home</Link></Nav.Link>
    //                     <Nav.Link className="nav-item"><Link to={"/login-page"}><HelpOutlineOutlinedIcon fontSize="small" /> Help</Link></Nav.Link>
    //                 </Nav>
    //             </Navbar.Collapse>
    //         </Navbar>
    //     </div>
    // </Grid>
    <div className="admin-header login-header common-header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {/* <span>
          <Image src={AdminLogo} fluid></Image>
        </span> */}
        <div className="logo-text">
          <img src={MotogomeryLogo} alt="Logo" />
          <span>Department of Health and Human Services</span>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className=""
          id="responsive-navbar-nav"
        ></Navbar.Collapse>
      </Navbar>
      {/* <div>
                {props.isDashboard === true &&
                    <NotificationsIcon  />
                }
            </div> */}
    </div>
  );
};

export default AdminHeader;
