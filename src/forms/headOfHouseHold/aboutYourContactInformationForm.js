
import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import AppUser from '../../views/images/tellus-title-icon.png';
import FormHeader from "../../components/FormComponents/FormHeader";
import FormOptions from "../../components/FormComponents/formOption";
import * as NAMES from '../../constants';
import FormData from "../../utils";
import PhoneNumber from '../../components/FormComponents/phoneNumber';
import EmailForm from '../../components/FormComponents/EmailForm';
import LanguageIcon from './../../views/images/language-icon.png';
import PreferredLanguage from '../../components/FormComponents/preferredLanguage';
import AccommadationNeed from '../../components/FormComponents/accommadationNeed';

const AboutYourContactInformationForm = (props) => {

    return (
        <div>
            <Container className="container" maxWidth="md">
                <div className="about-yourself">
                    <FormHeader img={AppUser}
                        headerTitle={NAMES.ABOUT_YOUR_CONTACTINFORMATION_TITLE}
                        alt={'image'} />
                    <div className="input-form-fields">
                        <FormOptions data={FormData.primaryPhoneNumber} title={NAMES.PRIMARY_PHONE_TEXT} labelClass={true} />
                        <PhoneNumber autoComplete={'off'} />
                        <EmailForm placeHolderText={NAMES.EMAIL_TEXT} autoComplete={'off'} addClass={true} />
                        <PreferredLanguage
                            placeHolderText={NAMES.PREFERRED_LANGUAGE}
                            autoComplete={'off'}
                        />
                        <FormOptions data={FormData.yesNoOptions} title={NAMES.INTERPRETER_TEXT} labelClass={true} />
                        <FormOptions data={FormData.emailPhoneMailOptions} title={NAMES.COMMUNICATE_TEXT} labelClass={true} />
                        <FormOptions data={FormData.yesNoOptions} title={NAMES.ACCOMMODATION_TEXT} labelClass={true} />
                        <AccommadationNeed
                            placeHolderText={NAMES.KINDOF_ACCOMMODATION_TEXT}
                            autoComplete={'off'}
                        />
                    </div>
                    {/*     <form ref={loginForm} >
                            <div className="input-block">
                                <div className={phoneNo === '' ? "floating_labels phone-bg phone-error" : 'floating_labels phone-bg'}>
                                    <MaskedInput
                                        mask={[/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                        className='floating-input'
                                        autoComplete='off'
                                        guide={false}
                                        id="my-input-id"
                                        onChange={(e) => { changeValids(e) }}
                                        required
                                    />
                                    <label>Phone (Required)</label>
                                    <span>{phoneNo === '' ? "Phone number is required" : ''}</span>
                                </div>
                            </div>

                            <div className="input-block">
                                <TextField
                                    type='text'
                                    name='email'
                                    autoComplete='off'
                                    error={errors && errors.email}
                                    onBlur={() => { validatecontact('email'); }}
                                    onChange={() => { validatecontact('email'); }}
                                    id="standard-basic"
                                    label="Email (Required)"
                                    className="input-field"
                                    helperText={errors && errors.email ? "email is required" : ""}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <MailIcon className="icon" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>

                            <div className="input-block">
                                <TextField
                                    type='text'
                                    name='language'
                                    error={errors && errors.language}
                                    autoComplete='off'
                                    id="standard-basic"
                                    label="Preferred Language (Required)"
                                    className="input-field"
                                    helperText={errors && errors.language ? "Language is required" : ""}
                                    onBlur={() => { validatecontact('language'); }}
                                    onChange={() => { validatecontact('language'); }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <img src={IconLanguage} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                        </form>
                        <div className="input-block gender-block p-t-16">
                            <InputLabel className="input-label label-width">
                                Do you need an Interpreter?
              </InputLabel>
                            <div className="gender">
                                <ul>
                                    <li className={isInterpreter === INTERPRETER_NO ? "selected" : ""}
                                        onClick={() => {
                                            handleInterpreterChange("InterpreterNo");
                                        }}>No</li>
                                    <li
                                        className={isInterpreter === INTERPRETER_YES ? "selected" : ""}
                                        onClick={() => {
                                            handleInterpreterChange("InterpreterYes");
                                        }}
                                    >Yes</li>
                                </ul>
                            </div>
                        </div>

                        <div className="input-block gender-block p-t-16">
                            <InputLabel className="input-label label-width">
                                How do you want us to communicate?
              </InputLabel>
                            <div className="gender">
                                <ul>
                                    <li className={isCommunicate === COMMUNICATE_EMAIL ? "selected" : ""}
                                        onClick={() => {
                                            handlecommunicateChange("CommunicateEmail");
                                        }}>Email</li>
                                    <li
                                        className={isCommunicate === COMMUNICATE_PHONE ? "selected" : ""}
                                        onClick={() => {
                                            handlecommunicateChange("CommunicatePhone");
                                        }}
                                    >Phone</li>
                                    <li
                                        className={isCommunicate === COMMUNICATE_MAIL ? "selected" : ""}
                                        onClick={() => {
                                            handlecommunicateChange("CommunicateMail");
                                        }}
                                    >Mail</li>
                                </ul>
                            </div>
                        </div>

                        <div className="input-block gender-block p-t-16">
                            <InputLabel className="input-label label-width">
                                Do you need any accommodations ?
              </InputLabel>
                            <div className="gender">
                                <ul>
                                    <li
                                        className={isAccommodations === ACCOMMODATIONS_NO ? "selected" : ""}
                                        onClick={() => {
                                            handleAccommodationsChange("AccommodationsNo");
                                        }}
                                    >No</li>
                                    <li className={isAccommodations === ACCOMMODATIONS_YES ? "selected" : ""}
                                        onClick={() => {
                                            handleAccommodationsChange("AccommodationsYes");
                                        }}>Yes</li>
                                </ul>
                            </div>
                        </div>
                        {isAccommodations === ACCOMMODATIONS_YES && <div className="input-block">
                            <TextField
                                id="standard-basic"
                                label="What kind of accommodations do you need?"
                                className="input-field"
                            />
                        </div>}
                    </div> */}
                </div>
            </Container>
        </div>
    );
};

export default AboutYourContactInformationForm;