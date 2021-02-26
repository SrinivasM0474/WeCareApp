import React, { useState } from "react";
import clsx from "clsx";
import { Grid, TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Help from "@material-ui/icons/Help";
import useStyles from "../../forms/benefits/AddressForm.styles";
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
import _ from "lodash";
import AbsentParentModal from './../../components/AbsentParentModal'
import { YES,NO } from "../../constants";
// import ChildrenModalInformation from './../../components/ChildrenModalInformation'
class AbsentParent extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false,      
      itemValue: [{
        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        relationship: '',
        editItem: false
      }],
      totalValue: 0,
      errorMess: null,     
       itemChildern: [{
        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        relationship: '',
        editItem: false
      }],
      isOpenAdultsModal: false,
      isOpenChildrenModal: false
    };
  }
  handleClick = (value) => {
    if (value === "Yes") this.setState({isActive:YES});
    else if (value === "No") this.setState({isActive: NO});
   
  }
  
  itemChange = (e, i, testvalue, name) => {
    e.preventDefault()

    let addValues = name === 'adults' ? this.state.itemValue : this.state.itemChildern
    addValues[i][testvalue] = e.target.value;
    if (name === 'adults') {
      this.setState({ itemValue: addValues })
    } else {
      this.setState({ itemChildern: addValues })
    }


  }
  addItems = (name) => {
    console.log(name);
    // this.setState({ isOpenAdultsModal: true });
    if (name === 'adults') {
      this.setState({ isOpenAdultsModal: true });
    } else {
      this.setState({ isOpenChildrenModal: true });
    }
  }
  editItem = (i) => {
    let editItem = this.state.itemValue;
    editItem[i].editItem = !this.state.itemValue[i].editItem
    this.setState({ itemValue: editItem })
  }
  editItemChildern = (i) => {
    let editItem = this.state.itemChildern;
    editItem[i].editItem = !this.state.itemChildern[i].editItem
    this.setState({ itemChildern: editItem })
  }
  removeItem = (i, name) => {
    if (this.state.itemValue.length > 1 || this.state.itemChildern.length > 1) {
      let removeItems = name === 'adults' ? this.state.itemValue : this.state.itemChildern
      let removeValue =
        removeItems.filter((test, index) => {
          return index !== i
        })
      if (name === 'adults') {
        this.setState({ itemValue: removeValue })
      } else {
        this.setState({ itemChildern: removeValue })
      }

    }
  }

  isOpenProfileModel = (isClosePopup) => {
    console.log(isClosePopup);
    this.setState({ isOpenAdultsModal: isClosePopup });
  }

  isOpenChildrenModel = (isClosePopup) => {
    this.setState({ isOpenChildrenModal: isClosePopup });

  }
  render() {
    console.log(this.state, 'previewpopup>>>>>>>')
    return (
      <Container maxWidth="md" className="container">
        <div className="about-yourself">
          <div className="about-header d-flex">
            <span>
              <PersonOutlineTwoToneIcon />
            </span>
            <h3>Tell us about your children Absent Parent Information (If relavent)</h3>
          </div>
          <div className="input-form-fields">
            <p className="text">Are you adding any absent parent to your application?</p>

            <div className="input-block gender-block">
              <div className="gender yes-no-block">
                <ul>
                   <li className={this.state.isActive===NO ? "selected" : ''} onClick={() => this.handleClick("No")}  >No</li>
                  <li className={this.state.isActive===YES ? "selected" : ''} onClick={() => this.handleClick("Yes")}>Yes</li>
                 
                </ul>
              </div>
            </div>{this.state.isActive === YES &&
              <div className="a-table">
                <div className="adults">
                  <div>
                    <WcIcon />
                    <span>Absent parent (s)</span>
                  </div>
                  <Button className="add-btn" onClick={() => this.addItems('adults')}>Add</Button>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Middle Name</th>
                      <th>Last Name</th>
                      <th>Date of Birth</th>
                      <th>Gender</th>
                      <th>Relationship</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      _.map(this.state.itemValue, (val, i) => {
                        return (
                          <tr>
                            <td>
                              <input type='text' style={{ width: '100%' }}
                                disabled={val.editItem}
                                value={val.firstName}
                                onChange={(e) => this.itemChange(e, i, 'firstName', 'adults')}

                              /></td>
                            <td>
                              <input type='text' style={{ width: '100%' }}
                                value={val.middleName}
                                disabled={val.editItem}
                                onChange={(e) => this.itemChange(e, i, 'middleName', 'adults')}

                              />
                            </td>
                            <td>
                              <input type='text' style={{ width: '100%' }}
                                value={val.lastName}
                                disabled={val.editItem}
                                onChange={(e) => this.itemChange(e, i, 'lastName', 'adults')}
                              />
                            </td>
                            <td>
                              <input type='number' style={{ width: '100%' }}
                                value={val.dateOfBirth}
                                disabled={val.editItem}
                                onChange={(e) => this.itemChange(e, i, 'dateOfBirth', 'adults')}
                              />
                            </td>
                            <td>
                              <input type='text' style={{ width: '100%' }}
                                value={val.gender}
                                disabled={val.editItem}
                                onChange={(e) => this.itemChange(e, i, 'gender', 'adults')}
                              />
                            </td>
                            <td>
                              <input type='text' style={{ width: '100%' }}
                                value={val.relationship}
                                disabled={val.editItem}
                                onChange={(e) => this.itemChange(e, i, 'relationship', 'adults')}
                              />
                            </td>
                            <td>
                              <span>
                                <EditIcon className="edit-icon" onClick={() => this.editItem(i, 'edit')} />
                              </span>
                              <span>
                                <CloseIcon className="close-icon" onClick={() => this.removeItem(i, 'adults')} />
                              </span>
                            </td>
                          </tr>
                        )
                      })
                    }



                  </tbody>
                </table>
              </div>
            }

          </div>

        </div>
        {this.state.isOpenAdultsModal && <AbsentParentModal closeModal={() => { this.isOpenProfileModel(false) }} />}
        {/* {this.state.isOpenChildrenModal && <ChildrenModalInformation closeModal={() => { this.isOpenChildrenModel(false) }} />} */}
      </Container>
    );
  }

}



export default AbsentParent;
