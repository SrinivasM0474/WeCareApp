import React from "react";
import ReactDOM from "react-dom";
import AdminHeader from "../views/AddminComponent/AdminHeader/AdminHeader";
import NavigationFlow from "./navigationFlow";

const Header = (props) => {
  return (
    <div>
      <AdminHeader />
      <NavigationFlow />
    </div>
  );
};

export default Header;
