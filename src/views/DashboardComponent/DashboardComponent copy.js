import React from 'react';
import { Container, Grid } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import UploadDocuments from '../images/uploaddocuments.png';
import RenewBenifits from '../images/renewbenifits.png';
import NewAppliaction from '../images/newappliaction.png';

import AdminHeader from '../AddminComponent/AdminHeader/AdminHeader';
import TableComponent from "./tableComponent";

import '../style.css';

const styles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
})
const rowsData = [
    { type: "Working Self Assistance", created: "10/14/2020", lastupdated: "12/20/2020", status: "Saved" },
    { type: "Working for Self Assistance", created: "08/11/2020", lastupdated: "12/10/2020", status: "Saved" },
    { type: "Working Parent Assistance", created: "10/05/2020", lastupdated: "11/28/2020", status: "Saved" }
];
const tableHeaders = [
    { name: "Type" },
    { name: "Created" },
    { name: "Last Updated" },
    { name: "Status" }
]
const myBData = [
    { "type": "Working Self Assistance", "benefitIssuedDate": "10/14/2020", "currentlyReceivingBenefit": "12/20/2020" },
    { "type": "Working for Self Assistance", "benefitIssuedDate": "08/11/2020", "currentlyReceivingBenefit": "12/10/2020" },
    { "type": "Working Parent Assistance", "benefitIssuedDate": "10/05/2020", "currentlyReceivingBenefit": "11/28/2020" }
];
const myBHeaders = [
    { name: "Type" },
    { name: "Benefit Issued Date" },
    { name: "Currently Receiving Benefit" }
]
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'English',
            isDashboard: true,
            isApplication: true
        }
    }
    handleChange = (event) => {
        this.setState({ lang: event.target.value });
    };
    render() {
        return (
            <div className="dashboard-bg user-dashboard">
                <Container>
                    <div className="specerdashboard"></div>
                    <div className="content-body content-body-d">
                        <AdminHeader isDashboard={this.state.isDashboard} />
                        <div className="dashboard-content">
                            <Container>
                                <Typography variant="h4" className="p-l" component="h4" gutterBottom>
                                    Welcome Mike John
                                </Typography>
                                <div className="p-r m-t-8">
                                    <p className="p-l m-r-15 m-b-10">Application Language:</p>
                                    <select className="langSelect">
                                        <option selected value="English">English</option>
                                    </select>
                                </div>
                                <Container>
                                    <div className="content-blocks">
                                        <Typography variant="h5" className="" component="h5" gutterBottom>
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
                                        <Typography variant="h5" className="" component="h5" gutterBottom>
                                            My Applications
                                        </Typography>
                                        <div className="blocks-content">
                                            <TableComponent data={rowsData} isApplication={this.state.isApplication} header={tableHeaders} />
                                        </div>
                                    </div>
                                    <div className="content-blocks">
                                        <Typography variant="h5" className="" component="h5" gutterBottom>
                                            My Benefits
                                        </Typography>
                                        <div className="blocks-content">
                                            <TableComponent data={myBData} header={myBHeaders} />
                                        </div>
                                    </div>
                                    {/* <div className="content-blocks">
                                        <div className="blocks-content documents">
                                            <Grid container >
                                                <Grid className="dash-box" item xs={12} md={4}>
                                                    <img src={NewAppliaction} alt="New Appliaction" width="82" height="68" />
                                                    <p>New Application</p>
                                                </Grid>
                                                <Grid className="dash-box" item xs={12} md={4}>
                                                    <img src={RenewBenifits} alt="Renew Benifits" width="82" height="68" />
                                                    <p>Renew Benifits</p>
                                                </Grid>
                                                <Grid className="dash-box" item xs={12} md={4}>
                                                    <img src={UploadDocuments} alt="Upload Documents" width="82" height="68" />
                                                    <p>Upload Documents</p>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </div> */}
                                </Container>
                            </Container>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(LoginComponent)

