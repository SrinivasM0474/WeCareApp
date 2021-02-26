import React from "react";
import ReactDOM from "react-dom";
import CommunityImage from "../views/images/CommunityConnect.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import UserIconImage from '../views/images/user-icon.png';
const NavigationFlow = () => {
  return (
    <div styles={{ fontColor: "black" }} className="navigation-flow">
      <div className="community-logo">
        <img src={CommunityImage} alt="community-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>About Us</li>
          <li>Services<ExpandMoreIcon className='services-icon' /></li>
          <li>Contact Us</li>
          <li>Help</li>
          <li className="nav-user">
            <img src={UserIconImage} alt='user-icon' className='user-icon' />
            Mike John
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationFlow;
