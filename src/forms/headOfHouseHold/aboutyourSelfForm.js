
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import AppUser from '../../views/images/tellus-title-icon.png';
import FirstName from "../../components/FormComponents/FirstName";
import LastName from "../../components/FormComponents/lastName";
import MiddleName from "../../components/FormComponents/middleName";
import FormHeader from "../../components/FormComponents/FormHeader";
import Suffix from "../../components/FormComponents/Suffix";
import FormOptions from "../../components/FormComponents/formOption";
import FormDate from "../../components/FormComponents/FormDate";
import Ssn from "../../components/FormComponents/Ssn";
import * as NAMES from '../../constants';
import FormData from "../../utils";
import FirstNameIcon from './../../views/images/first-name-icon.png';
import LastNameIcon from './../../views/images/last-name-icon.png';


const AboutYourSelfForm = (props) => {
  const [firstName, setFirstName] = React.useState({ firstName: '' });
  const [lastName, setLastName] = React.useState({ lastName: '' });
  const [date, setDate] = React.useState({ date: '' });

  const formValidation = (errorsData) => {
    if (errorsData && errorsData.firstName) setFirstName(errorsData)
    if (errorsData && errorsData.lastName) setLastName(errorsData)
    if (errorsData && errorsData.date) setDate(errorsData)
  }


  return (
    <div>

      <Container className="container" maxWidth="md">
        <div className="about-yourself">
          <FormHeader img={AppUser}
            headerTitle={NAMES.ABOUT_YOURSELF_TITLE}
            alt={'image'} />
          <div className="input-form-fields">
            <FirstName
              placeHolderText={NAMES.FIRST_NAME}
              autoComplete={'off'}
              icon={FirstNameIcon}
              formValidation={formValidation}
            />

            <MiddleName
              placeHolderText={NAMES.MIDDLE_NAME}
              autoComplete={'off'} />
            {/* <FirstName
              name={'Last Name'}
              placeHolderText={NAMES.LAST_NAME}
              autoComplete={'off'}
              icon={FirstNameIcon}
              formValidation={formValidation}
            /> */}
            <LastName
              placeHolderText={NAMES.LAST_NAME}
              autoComplete={'off'}
              formValidation={formValidation}
            />
            <Suffix data={FormData.options} title={NAMES.SUFFIX_TITLE} />
            <FormDate title={NAMES.DATE_TITLE} formValidation={formValidation} />
            <FormOptions data={FormData.gender} title={NAMES.GENDER_TITLE} />
            <Ssn title={NAMES.SSN_TITLE} />
          </div>
        </div>

      </Container>
    </div>
  );
};

export default AboutYourSelfForm;