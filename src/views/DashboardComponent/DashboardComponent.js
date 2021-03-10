import React from "react";
import { Container, Grid } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";

import UploadDocuments from "../images/uploaddocuments.png";
import RenewBenifits from "../images/renewbenifits.png";
import NewAppliaction from "../images/newappliaction.png";

import AdminHeader from "../AddminComponent/AdminHeader/AdminHeader";
import TableComponent from "./TableComponent";
import NavigationFlow from "../../components/NavigationFlow";
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import InfoIcon from '@material-ui/icons/Info';
import "../style.css";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CheckIcon from '@material-ui/icons/Check';

import NotificationImage from '../../views/images/dashboard-notifications-icon.png';
import SubmitImage from '../../views/images/dashboard-submitted-icon.png';
import SavedImage from '../../views/images/dashboad-saved-icon.png';
import NewApplicationImage from '../../views/images/dashboard-new-application-icon.png';
import UploadDocumentIMage from '../../views/images/dashboard-upload-documents-icon.png';
import InfoImage from '../../views/images/dashboad-info-icon.png';




const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});
const rowsData = [
  {
    type: "Working Self Assistance",
    created: "10/14/2020",
    lastupdated: "12/20/2020",
    status: "Saved",
  },
  {
    type: "Working for Self Assistance",
    created: "08/11/2020",
    lastupdated: "12/10/2020",
    status: "Saved",
  },
  {
    type: "Working Parent Assistance",
    created: "10/05/2020",
    lastupdated: "11/28/2020",
    status: "Saved",
  },
];
const tableHeaders = [
  { name: "Type" },
  { name: "Created" },
  { name: "Last Updated" },
  { name: "Status" },
];
const myBData = [
  {
    type: "Working Self Assistance",
    benefitIssuedDate: "10/14/2020",
    currentlyReceivingBenefit: "12/20/2020",
  },
  {
    type: "Working for Self Assistance",
    benefitIssuedDate: "08/11/2020",
    currentlyReceivingBenefit: "12/10/2020",
  },
  {
    type: "Working Parent Assistance",
    benefitIssuedDate: "10/05/2020",
    currentlyReceivingBenefit: "11/28/2020",
  },
];
const myBHeaders = [
  { name: "Type" },
  { name: "Benefit Issued Date" },
  { name: "Currently Receiving Benefit" },
];
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "English",
      isDashboard: true,
      isApplication: true,
    };
  }
  handleChange = (event) => {
    this.setState({ lang: event.target.value });
  };
  handleclick = () => {
    this.props.history.push("/aboutyou");
  };
  render() {
    return (
      <div className="user-dashboard">
        <AdminHeader isDashboard={this.state.isDashboard} />
        <NavigationFlow />
        {/* <Container>
          <div className="specerdashboard"></div>
          <div className="content-body content-body-d">
            <div className="dashboard-content">
              <Container>
                <Typography
                  variant="h4"
                  className="p-l"
                  component="h4"
                  gutterBottom
                >
                  Welcome Mike John
                </Typography>
                <div className="p-r m-t-8">
                  <p className="p-l m-r-15 m-b-10">Application Language:</p>
                  <select className="langSelect">
                    <option selected value="English">
                      English
                    </option>
                  </select>
                </div>
                <div className="content-blocks">
                  <Typography
                    variant="h5"
                    className=""
                    component="h5"
                    gutterBottom
                  >
                    Alert Messages
                  </Typography>
                  <div className="blocks-content">
                    <ul>
                      <li>12/7/2020</li>
                      <li>Reduce holiday gathering risks...</li>
                    </ul>
                  </div>
                </div>
                <div className="content-blocks">
                  <Typography
                    variant="h5"
                    className=""
                    component="h5"
                    gutterBottom
                  >
                    My Applications
                  </Typography>
                  <div className="blocks-content">
                    <TableComponent
                      data={rowsData}
                      isApplication={this.state.isApplication}
                      header={tableHeaders}
                    />
                  </div>
                </div>
                <div className="content-blocks">
                  <Typography
                    variant="h5"
                    className=""
                    component="h5"
                    gutterBottom
                  >
                    My Benefits
                  </Typography>
                  <div className="blocks-content">
                    <TableComponent data={myBData} header={myBHeaders} />
                  </div>
                </div>
                {
                  <div className="content-blocks">
                    <div className="blocks-content documents">
                      <Grid container>
                        <Grid
                          className="dash-box blockhover"
                          item
                          xs={12}
                          md={4}
                          onClick={() => this.props.history.push("/aboutyou")}
                          style={{ cursor: "pointer" }}
                        >
                          <>
                            <img
                              src={NewAppliaction}
                              alt="New Appliaction"
                              width="82"
                              height="68"
                            />
                            <p>New Application</p>
                          </>
                        </Grid>
                        <Grid className="dash-box" item xs={12} md={4}>
                          <img
                            src={RenewBenifits}
                            alt="Renew Benifits"
                            width="82"
                            height="68"
                          />
                          <p>Renew Benifits</p>
                        </Grid>
                        <Grid className="dash-box" item xs={12} md={4}>
                          <img
                            src={UploadDocuments}
                            alt="Upload Documents"
                            width="82"
                            height="68"
                          />
                          <p>Upload Documents</p>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                }
              </Container>
            </div>
          </div>
        </Container> */}

        <Container className='dashboard-user'>
          <div className='welcome-txt'>
            <Typography className='name'>Welcome Mike John</Typography>
            <Typography className='txt'>Welcome to your personal Community Connect Account Page. You can manage your account, apply for DHHS services,<br /> monitor your case status(es),
            manage your case activity and more!</Typography>
          </div>

          <div className='notifications'>
            <div className="about-header d-flex justify-content-between">
              <div className='d-flex'>
                <span>
                  {/* <NotificationsOutlinedIcon /> */}
                  <img src={NotificationImage} alt='notifications' />
                </span>
                <h3>Notifications</h3>
              </div>
              <div>
                {/* <InfoIcon className='info-icon'/> */}
                <img src={InfoImage} width={20} />
              </div>
            </div>
            <div>
              <table className='n-table'>
                <thead>
                  <tr>
                    <th>Received Date</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2/11/2021</td>
                    <td className='text-center'>Reduce holiday gathering risks. Maryland Department of Health lauanches mD... <Link>See more</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='notifications saved-app'>
            <div className="about-header d-flex justify-content-between">
              <div className='d-flex'>
                <span className='saved-icon'>
                  <img src={SavedImage} alt='saved-icon' />
                  {/* <BookmarkIcon /> */}
                </span>
                <h3>My Saved Applications</h3>
              </div>
              <div>
                {/* <InfoIcon className='info-icon'/> */}
                <img src={InfoImage} width={20} />

              </div>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Created Date</th>
                    <th>Last Updated</th>
                    <th>Application Number</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Working Parent Assistance</td>
                    <td>12/10/2020</td>
                    <td>1/22/2021</td>
                    <td>DHS02</td>
                    <td>Saved</td>
                    <td>
                      <span>
                        <EditIcon className="edit-icon" />
                      </span>
                      <span>
                        <CloseIcon className="close-icon" />
                      </span>
                    </td>
                  </tr>

                </tbody>
              </table>

            </div>
          </div>

          <div className='notifications submit-app'>
            <div className="about-header d-flex justify-content-between">
              <div className='d-flex'>
                <span className='submit-icon'>
                  <img src={SubmitImage} alt='submit-icon' />
                </span>
                <h3>My submitted Applications</h3>
              </div>
              <div>
                {/* <InfoIcon className='info-icon'/> */}
                <img src={InfoImage} width={20} />

              </div>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Created Date</th>
                    <th>Last Updated</th>
                    <th>Application Number</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Working Parent Assistance</td>
                    <td>12/10/2020</td>
                    <td>1/22/2021</td>
                    <td>DHS02</td>
                    <td>Saved</td>
                    <td>
                      <span>
                        <EditIcon className="edit-icon" />
                      </span>
                      <span>
                        <CloseIcon className="close-icon" />
                      </span>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
          <div className='dashboard'>
            <div className="content-blocks">
              <div className="blocks-content documents">
                <Grid container>
                  <Grid
                    className="dash-box blockhover"
                    item
                    xs={12}
                    md={6}
                    onClick={() => this.props.history.push("/app-process")}
                    style={{ cursor: "pointer" }}
                  >
                    <>
                      <img
                        src={NewApplicationImage}
                        alt="New Appliaction"
                      />
                      <p>New Application</p>
                    </>
                  </Grid>
                  <Grid className="dash-box" item xs={12} md={6}>
                    <img
                      src={UploadDocumentIMage}
                      alt="Upload Documents"
                    />
                    <p>Upload Documents</p>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Container>
        <div className='login-footer'>

        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LoginComponent);
