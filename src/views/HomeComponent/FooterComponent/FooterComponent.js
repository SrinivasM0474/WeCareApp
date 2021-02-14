import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Email, Room, PhoneInTalk } from '@material-ui/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import footerLog from '../../images/footer_logo.png';

const FooterComponent = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <img src={footerLog} alt="Footer Logo" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5 className="footertitle">Navigation</h5>
                    <ul className="list-styled footerlink">
                        <li className="btn-link"> <a>Home</a> </li>
                        <li className="btn-link"> <a>Calendar</a> </li>
                        <li className="btn-link"> <a>Our Staff</a> </li>
                        <li className="btn-link"> <a>Resourses</a> </li>
                        <li className="btn-link"> <a>User Rights</a> </li>
                        <li className="btn-link"> <a>Contacts Us</a> </li>
                    </ul>
                </Col>
                <Col>
                    <h5 className="footertitle">Policies</h5>
                    <ul className="list-styled footerlink">
                        <li className="btn-link"> <a>Privacy Policy</a> </li>
                        <li className="btn-link"> <a>User Rights</a> </li>
                        <li className="btn-link"> <a>Accessibility</a> </li>
                        <li className="btn-link"> <a>Language Transiations</a> </li>
                        <li className="btn-link"> <a>Social Media</a> </li>
                        <li className="btn-link"> <a>County Code</a> </li>
                    </ul>
                </Col>
                <Col>
                    <h5 className="footertitle">Social Links</h5>
                    <ul className="list-styled footerlink">
                        <li className="space"> <FacebookIcon /><a  target="_blank" href="https://www.google.com">Facebook</a> </li>
                        <li className="space"> <TwitterIcon /> <a target="_blank" href="https://www.google.com">Twitter</a> </li>
                        <li className="space">< InstagramIcon /> <a target="_blank" href="https://www.google.com">Instagram</a> </li>
                     
                        <li> <YouTubeIcon/> <a target="_blank" href="https://www.google.com">You tube</a> </li>
                   
                    </ul>
                </Col>
                <Col className="text-left">
                    <h5 className="footertitle">Contact Info</h5>
           	        <p className="white"><PhoneInTalk />&nbsp;&nbsp;Telephone: <span className="p-l-10"> +012 345 67890</span></p>
                    <p className="white"><Email />&nbsp;&nbsp;Email:  <span className="p-l-10">info@example.com</span></p>
                    <p className="white"><Room />&nbsp;&nbsp;Address: <span className="p-l-10">123 Street, New York, USA</span></p>
                </Col>
            </Row>
            {/* <Row>
                <Col className="text-center">
                    <p className="white">Copyright © Montgomery County Government&nbsp; All rights reserved.</p>
                </Col>
            </Row> */}
        </Container>
    )
}

export default FooterComponent;