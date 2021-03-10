import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
// import IndexCss from "./index.css";

// pages for this app
import HomeComponent from "./views/HomeComponent/HomeComponent";
import LoginComponent from "./views/AddminComponent/LoginComponent/LoginComponent";
import NewUserComponent from "./views/AddminComponent/NewUserComponent/NewUserComponent";
import DashboardComponent from "./views/DashboardComponent/DashboardComponent";
import AboutYourselfPage from "./pages/benefits/AboutYourselfPage";
import AppProcess from "../src/views/DashboardComponent/AppProcess";
import AppBenifits from "../src/views/DashboardComponent/AppBenifits";

var hist = new createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/login-page" component={LoginComponent} />
      <Route exact path="/new-user" component={NewUserComponent} />
      <Route exact path="/user-dashboard" component={DashboardComponent} />
      <Route exact path="/aboutyou" component={AboutYourselfPage} />
      <Route exact path="/app-process" component={AppProcess} />
      <Route exact path="/app-benifits" component={AppBenifits} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
