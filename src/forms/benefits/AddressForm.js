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
import _ from "lodash";
class AddressForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isActiveYes: false,
      isActiveNo:true,
      itemValue: [{
      firstName:'',
      middleName:'',
      lastName:'',
      dateOfBirth:'',
      gender:'',
      relationship:'',
      editItem:false
      }],
      totalValue: 0,
      errorMess: null,
    };
  }
  handleClick=()=>{
    this.setState({isActiveYes:!this.state.isActiveYes?true:false,
    isActiveNo:!this.state.isActiveNo?true:false})
    
  }
  itemChange=(e, i,testvalue)=>{
    e.preventDefault()
    
    let addValues=this.state.itemValue
    this.state.itemValue[i][testvalue]=e.target.value;
    console.log(this.state.itemValue[i],'testvaluesssssssssssss')
    this.setState({itemValue:addValues})

  }
  addItems=()=>{
    let increaseItems=(this.state.itemValue);
    let editvalueDisable=this.state.itemValue.length
    increaseItems.push({
      firstName:'',
      middleName:'',
      lastName:'',
      dateOfBirth:'',
      gender:'',
      relationship:'',
      
      })
      this.state.itemValue[editvalueDisable-1].editItem=true;
    this.setState({itemValue:increaseItems})
  }
  editItem=(i)=>{
    let editItem=this.state.itemValue;
    editItem[i].editItem=!this.state.itemValue[i].editItem
    this.setState({itemValue:editItem})
  }
  removeItem=(i)=>{
    if(this.state.itemValue.length>1){
      let removeValue=
      this.state.itemValue.filter((test,index)=>{
        return index!==i
      })
      this.setState({itemValue:removeValue})
    }
   
   
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
            <h3>Tell us about your household</h3>
          </div>
          <div className="input-form-fields">
            <p className="text">Are you adding any adults to your application?</p>
  
            <div className="input-block gender-block">
              <div className="gender yes-no-block">
                <ul>
                  <li className={this.state.isActiveYes?"selected":''} onClick={()=>this.handleClick()}>Yes</li>
                  <li className={this.state.isActiveNo?"selected":''} onClick={()=>this.handleClick()}  >No</li>
                </ul>
              </div>
            </div>{this.state.isActiveYes===true&&
            <div className="a-table">
            <div className="adults">
              <div>
                <WcIcon />
                <span>Adult(s)</span>
              </div>
              <Button className="add-btn" onClick={()=>this.addItems()}>Add</Button>
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
               
                  {
                     _.map(this.state.itemValue, (val, i) => {
                      return (
                        <tr>
                        <td> 
                          <input type='text' style={{width:'100px'}}
                          disabled={val.editItem}
                           value={val.firstName}
                           onChange={(e) => this.itemChange(e,i,'firstName')}
                       
                      /></td>
                      <td>
                      <input type='text' style={{width:'100px'}}
                           value={val.middleName}
                           disabled={val.editItem}
                           onChange={(e) => this.itemChange(e,i,'middleName')}
                       
                      />
                      </td>
                      <td>
                      <input type='text' style={{width:'100px'}}
                           value={val.lastName}
                           disabled={val.editItem}
                           onChange={(e) => this.itemChange(e,i,'lastName')}                       
                      />
                      </td>
                      <td>
                      <input type='number' style={{width:'100px'}}
                           value={val.dateOfBirth}
                           disabled={val.editItem}
                           onChange={(e) => this.itemChange(e,i,'dateOfBirth')}
                      />
                      </td>
                      <td>
                      <input type='text' style={{width:'100px'}}
                           value={val.gender}
                           disabled={val.editItem}
                           onChange={(e) => this.itemChange(e,i,'gender')}
                      />
                      </td>
                      <td>
                      <input type='text' style={{width:'100px'}}
                           value={val.relationship}
                           disabled={val.editItem}
                           onChange={(e) => this.itemChange(e,i,'relationship')}
                      />
                      </td>
                      <td>
                      <span>
                      <EditIcon className="edit-icon" onClick={()=>this.editItem(i,'edit')} />
                    </span>
                    <span>
                      <CloseIcon className="close-icon" onClick={()=>this.removeItem(i)} />
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
  }

}



export default AddressForm;
