import React, { useState } from "react";
import clsx from "clsx";
import { Grid, TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Help from "@material-ui/icons/Help";
import useStyles from "./AddressForm.styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Container from "@material-ui/core/Container";
// import PersonTwoToneIcon from "@material-ui/icons/PersonTwoTone";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import RecordVoiceOverOutlinedIcon from "@material-ui/icons/RecordVoiceOverOutlined";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import WcIcon from "@material-ui/icons/Wc";

const AddressForm = (props) => {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(false);

  const handleClick = (buttonFlag) => {
    setIsActive(buttonFlag);
  };

  return (
    // <>
    //   <div
    //     style={{
    //       marginTop: "20px",
    //       marginBottom: "60px",
    //       fontColor: "black",
    //       fontFamily: "inherit",
    //       marginLeft: "15%",
    //       fontSize: "24px",
    //       color: "#d53f00",
    //     }}
    //   >
    //     Tell us about your Residential Address
    //   </div>
    //   <Grid
    //     container
    //     spacing={2}
    //     direction="column"
    //     justify="center"
    //     width="100%"
    //     style={{
    //       marginRight: "100px",
    //       marginLeft: "15%",
    //       marginTop: "30px",
    //     }}
    //   >
    //     <Grid item xs={8}>
    //       <FormControl className={clsx(classes.margin, classes.textField)}>
    //         <InputLabel>Address line 1</InputLabel>
    //         <Input
    //           type="text"
    //           id="addressline1"
    //           endAdornment={
    //             <InputAdornment position="end">
    //               <Tooltip title="Add you address line 1 here" aria-label="add">
    //                 <Help color="primary" />
    //               </Tooltip>
    //             </InputAdornment>
    //           }
    //         />
    //       </FormControl>
    //     </Grid>
    //     <Grid item xs={8}>
    //       <FormControl className={clsx(classes.margin, classes.textField)}>
    //         <InputLabel>Address line 2</InputLabel>
    //         <Input type="text" id="addressline2" />
    //       </FormControl>
    //     </Grid>
    //     <Grid item xs={8}>
    //       <FormControl className={clsx(classes.margin, classes.textField)}>
    //         <InputLabel>Zip</InputLabel>
    //         <Input type="text" id="zip" />
    //       </FormControl>
    //     </Grid>
    //     <Grid item xs={8}>
    //       <FormControl className={clsx(classes.margin, classes.textField)}>
    //         <InputLabel>State</InputLabel>
    //         <Input type="text" id="state" />
    //       </FormControl>
    //     </Grid>
    //     <Grid item xs={8}>
    //       <FormControl className={clsx(classes.margin, classes.textField)}>
    //         <InputLabel>City</InputLabel>
    //         <Input type="text" id="city" />
    //       </FormControl>
    //     </Grid>
    //     <Grid item xs={8}>
    //       <FormControl className={clsx(classes.margin, classes.textField)}>
    //         <InputLabel>County</InputLabel>
    //         <Input type="text" id="county" />
    //       </FormControl>
    //     </Grid>
    //     <Grid item xs={8}>
    //       <p className={classes.extraAddressTitle}>
    //         Is there any other address that we should mail to?
    //       </p>
    //     </Grid>
    //     <Grid item xs={4}>
    //       <Button
    //         variant="contained"
    //         color={isActive ? "secondary" : ""}
    //         onClick={() => handleClick(true)}
    //       >
    //         Yes
    //       </Button>
    //       <Button
    //         variant="contained"
    //         color={isActive ? "" : "secondary"}
    //         onClick={() => handleClick()}
    //       >
    //         No
    //       </Button>
    //     </Grid>
    //     {isActive && (
    //       <>
    //         <Grid item xs={8}>
    //           <FormControl className={clsx(classes.margin, classes.textField)}>
    //             <InputLabel>Address line 1</InputLabel>
    //             <Input
    //               type="text"
    //               id="addressline1second"
    //               endAdornment={
    //                 <InputAdornment position="end">
    //                   <Tooltip
    //                     title="Add you address line 1 here"
    //                     aria-label="add"
    //                   >
    //                     <Help color="primary" />
    //                   </Tooltip>
    //                 </InputAdornment>
    //               }
    //             />
    //           </FormControl>
    //         </Grid>
    //         <Grid item xs={8}>
    //           <FormControl className={clsx(classes.margin, classes.textField)}>
    //             <InputLabel>Address line 2</InputLabel>
    //             <Input type="text" id="addressline2second" />
    //           </FormControl>
    //         </Grid>
    //         <Grid item xs={8}>
    //           <FormControl className={clsx(classes.margin, classes.textField)}>
    //             <InputLabel>Zip</InputLabel>
    //             <Input type="text" id="zipSecond" />
    //           </FormControl>
    //         </Grid>
    //         <Grid item xs={8}>
    //           <FormControl className={clsx(classes.margin, classes.textField)}>
    //             <InputLabel>State</InputLabel>
    //             <Input type="text" id="stateSecond" />
    //           </FormControl>
    //         </Grid>
    //         <Grid item xs={8}>
    //           <FormControl className={clsx(classes.margin, classes.textField)}>
    //             <InputLabel>City</InputLabel>
    //             <Input type="text" id="citySecond" />
    //           </FormControl>
    //         </Grid>
    //         <Grid item xs={8}>
    //           <FormControl className={clsx(classes.margin, classes.textField)}>
    //             <InputLabel>County</InputLabel>
    //             <Input type="text" id="countySecond" />
    //           </FormControl>
    //         </Grid>
    //       </>
    //     )}
    //   </Grid>
    // </>
    <Container maxWidth="md" className="container">
      <div className="about-yourself">
        <div className="about-header d-flex">
          <span>
            <PersonOutlineTwoToneIcon />
          </span>
          <h3>Tell us about your household</h3>
        </div>
        <div className="input-form-fields">
          <p className="text">Are you adding any adults to your application?</p>

          <div className="input-block gender-block">
            <div className="gender yes-no-block">
              <ul>
                <li className="selected">Yes</li>
                <li>No</li>
              </ul>
            </div>
          </div>
          <div className="a-table">
            <div className="adults">
              <div>
                <WcIcon />
                <span>Adult(s)</span>
              </div>
              <Button className="add-btn">Add</Button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                  <th>Date Of Birth</th>
                  <th>Gender</th>
                  <th>Relationship</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td>Middle Name</td>
                  <td>Last Name</td>
                  <td>Date Of Birth</td>
                  <td>Gender</td>
                  <td>Relationship</td>
                  <td>
                    <span>
                      <EditIcon className="edit-icon" />
                    </span>
                    <span>
                      <CloseIcon className="close-icon" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>First Name</td>
                  <td>Middle Name</td>
                  <td>Last Name</td>
                  <td>Date Of Birth</td>
                  <td>Gender</td>
                  <td>Relationship</td>
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
        <div className="input-form-fields">
          <p className="text">Are you adding any adults to your application?</p>

          <div className="input-block gender-block">
            <div className="gender yes-no-block">
              <ul>
                <li className="selected">Yes</li>
                <li>No</li>
              </ul>
            </div>
          </div>
          <div className="a-table">
            <div className="adults">
              <div>
                <WcIcon />
                <span>Children</span>
              </div>
              <Button className="add-btn">Add</Button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                  <th>Date Of Birth</th>
                  <th>Gender</th>
                  <th>Relationship</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td>Middle Name</td>
                  <td>Last Name</td>
                  <td>Date Of Birth</td>
                  <td>Gender</td>
                  <td>Relationship</td>
                  <td>
                    <span>
                      <EditIcon className="edit-icon" />
                    </span>
                    <span>
                      <CloseIcon className="close-icon" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>First Name</td>
                  <td>Middle Name</td>
                  <td>Last Name</td>
                  <td>Date Of Birth</td>
                  <td>Gender</td>
                  <td>Relationship</td>
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
      </div>
    </Container>
  );
};

export default AddressForm;
