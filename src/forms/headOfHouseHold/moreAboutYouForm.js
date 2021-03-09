
import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import AppUser from '../../views/images/tellus-title-icon.png';
import FirstName from "../../components/FormComponents/firstName";
import FormHeader from "../../components/FormComponents/formHeader";
import Suffix from "../../components/FormComponents/suffix";
import FormOptions from "../../components/FormComponents/formOption";
import FormDate from "../../components/FormComponents/formDate";
import FormData from "../../utils";
import * as NAMES from '../../constants';
import MilitaryVeteranStatus from '../../components/FormComponents/militaryVeteranStatus';

const MoreAboutYouForm = (props) => {

    return (
        <Container className="container" maxWidth="md">
            <div className="about-yourself">
                <FormHeader img={AppUser}
                    headerTitle={NAMES.TELL_US_MORE_ABOUT_YOU}
                    alt={'image'} />

                <div className="input-form-fields">
                    <Suffix data={FormData.maritalStatus} title={NAMES.WHAT_IS_YOUR_MARITAL_STATUS} />
                    <Suffix data={FormData.citizenshipStatus} title={NAMES.WHAT_IS_YOUR_CITIZENSHIP_STATUS} />
                    <MilitaryVeteranStatus placeHolderText={NAMES.UNITED_STATES_MILITARY_VETERAN_STATUS} autoComplete={'off'} />
                    <Suffix data={FormData.highestLevelEducation} title={NAMES.HIGHEST_LEVEL_EDUCATION} />
                    <Suffix data={FormData.whatIsYourRace} title={NAMES.WHAT_IS_YOUR_RACE} />
                    <FormOptions data={FormData.yesNoOptions} title={NAMES.HISPANIC_TEXT} addClass={true} />
                    <FormOptions data={FormData.yesNoOptions} title={NAMES.PREGNANT_TEXT} addClass={true} />
                    <FormDate title={NAMES.WHAT_IS_YOUR_DUE_DATE} />
                </div>
                {/*
                        <div className="full-width input-block">
                            <FormControl className="full-width">
                                <InputLabel className="input-label">
                                    What is your Race?
                </InputLabel>
                                <Select className="text-left">
                                    <MenuItem value={10}>One</MenuItem>
                                    <MenuItem value={20}>Two</MenuItem>
                                    <MenuItem value={30}>Three</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="about-origin">
                            <p className="text">Are you Hispanic or Latino origin?</p>
                            <div className="input-block gender-block">
                                <div className="gender yes-no-block">
                                    <ul>
                                        <li className={isOrigin === NO ? "selected" : ""} onClick={() => {
                                            handleOrigin("No");
                                        }}>No</li>
                                        <li className={isOrigin === YES ? "selected" : ""} onClick={() => {
                                            handleOrigin("Yes");
                                        }}>Yes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="about-origin">
                            <p className="text">Are you Pregnant?</p>
                            <div className="input-block gender-block">
                                <div className="gender yes-no-block">
                                    <ul>
                                        <li onClick={() => { handleIspregnent("No") }} className={isPregnent === NO ? "selected" : ""}>No</li>
                                        <li onClick={() => { handleIspregnent("Yes") }} className={isPregnent === YES ? "selected" : ""}>Yes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {isPregnent === YES &&

                            <div className="full-width input-block about-date">
                                <MuiPickersUtilsProvider
                                    utils={DateFnsUtils}
                                    className="full-width"
                                >
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="dob"
                                        label="What is her due date?"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            "aria-label": "change date",
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </div>
                        }
                    </div>*/}

            </div>
        </Container>
    );
};

export default MoreAboutYouForm;