
import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import AppUser from '../../views/images/tellus-title-icon.png';
import FirstName from "../../components/FormComponents/FirstName";
import FormHeader from "../../components/FormComponents/FormHeader";
import Suffix from "../../components/FormComponents/Suffix";
import FormOptions from "../../components/FormComponents/formOption";
import FormDate from "../../components/FormComponents/FormDate";
import Ssn from "../../components/FormComponents/Ssn";
import {
    ABOUT_YOURSELF_TITLE, FIRST_NAME, MIDDLE_NAME, LAST_NAME,
    SUFFIX_TITLE, DATE_TITLE, GENDER_TITLE, SSN_TITLE
} from "../../constants";
import FormData from "../../utils";
// import FaceRoundedIcon from "@material-ui/icons/FaceRounded";
// import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import FirstNameIcon from './../../views/images/first-name-icon.png';
import LastNameIcon from './../../views/images/last-name-icon.png';
import * as NAMES from '../../constants';
import AddressImage from '../../views/images/address-icon.png';
import ZipImage from '../../views/images/zip-icon.png';

const AboutResidentialAddressForm = (props) => {

    return (
        <Container className="container" maxWidth="md">
            <div className="about-yourself">
                <FormHeader img={AppUser}
                    headerTitle={NAMES.ABOUT_YOUR_RESIDENTIAL_TITLE}
                    alt={'image'} />

                <div className="input-form-fields">
                    <FirstName
                        placeHolderText={NAMES.ADDRESSLINE1}
                        autoComplete={'off'}
                        icon={AddressImage}
                    />
                    <FirstName
                        placeHolderText={NAMES.ADDRESSLINE2}
                        autoComplete={'off'}
                        icon={''}
                    />
                    <FirstName
                        placeHolderText={NAMES.CITY}
                        autoComplete={'off'}
                        icon={''}
                    />
                    <FirstName
                        placeHolderText={NAMES.STATE}
                        autoComplete={'off'}
                        icon={''}
                    />
                    <FirstName
                        placeHolderText={NAMES.ZIPCODE}
                        autoComplete={'off'}
                        icon={ZipImage}
                    />
                    <FormOptions data={FormData.yesNoOptions} title={NAMES.IS_THERE_ANY_ADDRESS_TEXT} addClass={true} />
                    <FirstName
                        placeHolderText={NAMES.ADDRESSLINE1}
                        autoComplete={'off'}
                        icon={AddressImage}
                    />
                    <FirstName
                        placeHolderText={NAMES.ADDRESSLINE2}
                        autoComplete={'off'}
                        icon={''}
                    />
                    <FirstName
                        placeHolderText={NAMES.CITY}
                        autoComplete={'off'}
                        icon={''}
                    />
                    <FirstName
                        placeHolderText={NAMES.STATE}
                        autoComplete={'off'}
                        icon={''}
                    />
                    <FirstName
                        placeHolderText={NAMES.ZIPCODE}
                        autoComplete={'off'}
                        icon={ZipImage}
                    />

                </div>

                {/* <div className="input-block">
                            <TextField
                                id="standard-basic"
                                label="Address Line 2"
                                className="input-field"
                                autoComplete='off'
                            />
                        </div>

                        <div className="input-block">
                            <TextField
                                type='text'
                                name='City'
                                id="standard-basic"
                                label="City (Required)"
                                className="input-field"
                                autoComplete='off'
                                onBlur={() => { validate('City'); }}
                                onChange={() => { validate('City'); }}
                                error={errors && errors.City}
                                helperText={errors && errors.City ? "City is required" : ""}
                            />
                        </div>

                        <div className="input-block">
                            <TextField
                                type='text'
                                name='State'
                                id="standard-basic"
                                label="State (Required)"
                                className="input-field"
                                autoComplete='off'
                                onBlur={() => { validate('State'); }}
                                onChange={() => { validate('State'); }}
                                error={errors && errors.State}
                                helperText={errors && errors.State ? "State is required" : ""}
                            />
                        </div>

                        <div className="input-block">
                            <TextField
                                type='text'
                                name='ZipCode'
                                id="standard-basic"
                                label="Zip Code (Required)"
                                className="input-field"
                                autoComplete='off'
                                onBlur={() => { validate('ZipCode'); }}
                                onChange={() => { validate('ZipCode'); }}
                                error={errors && errors.ZipCode}
                                helperText={errors && errors.ZipCode ? "Zip Code is required" : ""}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <img src={ZipImage} />

                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    </form>
                    <div className="about-origin">
                        <p className="text">
                            Is there another address that we should send mail to?
            </p>
                        <div className="input-block gender-block">
                            <div className="gender yes-no-block">
                                <ul>

                                    <li onClick={() => { handleAnotherAddress("No") }} className={isAnotherAddress === NO ? "selected" : ""}>No</li>
                                    <li onClick={() => { handleAnotherAddress("Yes") }} className={isAnotherAddress === YES ? "selected" : ""}>Yes</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    {isAnotherAddress === YES &&
                        <div>
                            <form ref={addressNew} >
                                <div className="input-block">
                                    <TextField
                                        type='text'
                                        name='AddressNew'
                                        id="standard-basic"
                                        label="Address Line 1 (Required)"
                                        className="input-field"
                                        autoComplete='off'
                                        onBlur={() => { validateAnother('AddressNew'); }}
                                        onChange={() => { validateAnother('AddressNew'); }}
                                        error={errorsAnother && errorsAnother.AddressNew}
                                        helperText={errorsAnother && errorsAnother.AddressNew ? "Address Line 1 is required" : ""}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <img src={AddressImage} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                </div>
                                <div className="input-block">
                                    <TextField
                                        id="standard-basic"
                                        label="Address Line 2"
                                        className="input-field"
                                    />
                                </div>
                                <div className="input-block">
                                    <TextField
                                        type='text'
                                        name='City'
                                        id="standard-basic"
                                        label="City (Required)"
                                        className="input-field"
                                        autoComplete='off'
                                        onBlur={() => { validateAnother('City'); }}
                                        onChange={() => { validateAnother('City'); }}

                                        error={errorsAnother && errorsAnother.City}
                                        helperText={errorsAnother && errorsAnother.City ? "City is required" : ""}
                                    />
                                </div>
                                <div className="input-block">
                                    <TextField
                                        type='text'
                                        name='State'
                                        id="standard-basic"
                                        label="State (Required)"
                                        className="input-field"
                                        autoComplete='off'
                                        onBlur={() => { validateAnother('State'); }}
                                        onChange={() => { validateAnother('State'); }}
                                        error={errorsAnother && errorsAnother.State}
                                        helperText={errorsAnother && errorsAnother.State ? "State is required" : ""}
                                    />
                                </div>
                                <div className="input-block">
                                    <TextField
                                        type='text'
                                        name='ZipCode'
                                        id="standard-basic"
                                        label="Zip Code (Required)"
                                        className="input-field"
                                        autoComplete='off'
                                        onBlur={() => { validateAnother('ZipCode'); }}
                                        onChange={() => { validateAnother('ZipCode'); }}

                                        error={errorsAnother && errorsAnother.ZipCode}
                                        helperText={errorsAnother && errorsAnother.ZipCode ? "Zip Code is required" : ""}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <img src={ZipImage} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </div>
                            </form>
                        </div>
                    }
                </div> */}
            </div>
        </Container >
    );
};

export default AboutResidentialAddressForm;