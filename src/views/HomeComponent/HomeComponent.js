import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, Image, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HealthComponent from "./HealthComponent/HealthComponent";
import ProgramsComponent from "./ProgramsComponent/ProgramsComponent";
import EventsComponent from "./EventsComponent/EventsComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import '../style.css';
import Logo from '../images/logo.png';
import Banner from '../images/baner_img.png';
import covidImg from '../images/covid_a.png';
import calenderImg from '../images/calender_a.png';
import foodImg from '../images/food.png';
import publichealthImg from '../images/publichealth_a.png';
import SearchIcon from '@material-ui/icons/Search';

import foodSup from '../images/fsp.png';
import tempCash from '../images/tca.png';
import tempDisa from '../images/tdp.png';
import childSup from '../images/csp.png';

import styles from "../../assets/jss/material-kit-react/views/components.js";

const healthComponentData = [
    { "img": covidImg, "title": "Covid Testing", "desc": "Dr. Travis Gayles, and the Count Watch the recorded session here." }, 	
    { "img": calenderImg, "title": "Calendar", "desc": "Dr. Travis Gayles, and the Count Watch the recorded session here." }, 	
    { "img": foodImg, "title": "Food Resourses", "desc": "Dr. Travis Gayles, and the Count Watch the recorded session here." }, 	
    { "img": publichealthImg, "title": "Public Health", "desc": "Dr. Travis Gayles, and the Count Watch the recorded session here." }	
];
const programsComponentData = [
    { "img": foodSup, "title": "Food Supplement Program", "desc": "Lorem Ipsum standard text." }, 
    { "img": tempCash, "title": "Temporary Cash Assistance", "desc": "Lorem Ipsum standard text." }, 
    { "img": tempDisa, "title": "Temporary Disability Program", "desc": "Lorem Ipsum standard text." }, 
    { "img": childSup, "title": "Child Support Program", "desc": "Lorem Ipsum standard text." }
];
const eventsComponenttData = [
    { "date": "Jan 26th", "title": "Lorem is simply text Dummy Text", "desc": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin."}, 
    { "date": "Feb 11th", "title": "Lorem is simply text", "desc": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin."}, 
    { "date": "Mar 31th", "title": "Lorem is simply text", "desc": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin."}
];

export default class HomeComponent extends React.Component {
    
state = {
    isTop: true,
};
componentDidMount(){
    document.addEventListener('scroll', () => {
        const isTop = window.scrollY < 60;
        if (isTop !== this.state.isTop) {
            this.setState({ isTop });
        }
    });
}

   render(){
    return(
        // Main Container
        <div>
           
           <div className="header">
                {/* <div className={classes.container}>
                    <Grid item lg={12}> */}
                    {/* <Container>
                        <Row> */}
                          <div className={this.state.isTop ? 'down' : 'up'}>
                            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                                <Navbar.Brand>
                                    <Image src={Logo} fluid />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse className="m-t-10" id="responsive-navbar-nav">
                                    <Nav className="mr-auto m-l-80">
                                        <Nav.Link className="nav-item"><Link to={"/"}>Home</Link></Nav.Link>
                                        <NavDropdown title="Services" className="m-t-3" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="https://www.montgomerycountymd.gov/mc311/" target="_blank">MC311</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Online Services</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Make Payments</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Report Complaints</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Language" className="m-t-3" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Spanish</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link className="nav-item"><Link to={"#"}>Help</Link></Nav.Link>
                                        <Nav.Link className="nav-item"><Link to={"/login-page"}>Login</Link></Nav.Link>
                                    </Nav>
                                    
                                </Navbar.Collapse>
                                <Form.Control type="text" placeholder="Search" />
                                <div className="search-icon"><SearchIcon/></div>
                            </Navbar>
                        </div>
                    {/* </Grid>
                </div> */}
                    {/* </Row>
                </Container> */}
                <div className="banner-top">
                    <Container>
                            <div className="banner-content">
                                <div>Hello</div>
                            <h1 class="welocmetxt">Welcome to..</h1>
                                <h3 class="welocmetxt">Montgomery County</h3>
                                <Button variant="danger">GET STARTED NOW</Button>
                            </div>
                    </Container>
                    <Image src={Banner} fluid />
                </div>
            </div>

            <div className="">
                <div className="covid-section">
                    <Container>
                        <Row>
                            {healthComponentData.map(item => {
                                return  <HealthComponent 
                                    img={item.img} 
                                    title={item.title}
                                    desc={item.desc} 
                                />
                            })}
                        {/* <HealthComponent img={covidImg} title="Covid Testing" desc="Dr. Travis Gayles, and the Count Watch the recorded session here." /> */}
                        </Row>
                    </Container>
                </div>
                <div className="programs-section ourprogramblock">
                    <h2>Our <span>Programs & Services</span></h2>
		            <hr />
                    <Container>
                        <Row>
                            {programsComponentData.map(item => {
                                return  <ProgramsComponent 
                                    img={item.img} 
                                    title={item.title}
                                    desc={item.desc} 
                                />
                            })}
                        </Row>
                    </Container>
                    {/* <ProgramsComponent /> */}
                    <Button variant="primary">View More</Button>
                </div>
                <div className="ourprogramblock events-section">
                    <h2>Our <span>Events</span></h2>
		            <hr />
                    <Container>
                        <Row>
                            {eventsComponenttData.map(item => {
                                return  <EventsComponent 
                                    date={item.date} 
                                    title={item.title}
                                    desc={item.desc} 
                                />
                            })}
                        </Row>
                    </Container>
                    {/* <EventsComponent /> */}
                    <Button variant="primary">View More</Button>
                </div>
            </div>

            <div className="footer">
                <FooterComponent />
            </div>

        </div>
        // Main Container End
    );

}
}


//export default HomeComponent;