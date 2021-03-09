
import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import AppUser from '../../views/images/tellus-title-icon.png';
import FirstName from "../../components/FormComponents/firstName";
import LastName from "../../components/FormComponents/lastName";
import MiddleName from "../../components/FormComponents/middleName";
import FormHeader from "../../components/FormComponents/formHeader";
import Suffix from "../../components/FormComponents/suffix";
import FormOptions from "../../components/FormComponents/formOption";
import FormDate from "../../components/FormComponents/formDate";
import Ssn from "../../components/FormComponents/ssn";
import * as NAMES from '../../constants';
import FormData from "../../utils";
import FirstNameIcon from './../../views/images/first-name-icon.png';
import LastNameIcon from './../../views/images/last-name-icon.png';

const AboutYourSelfForm = (props) => {

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
            />
            <MiddleName
              placeHolderText={NAMES.MIDDLE_NAME}
              autoComplete={'off'} />
            <LastName
              placeHolderText={NAMES.LAST_NAME}
              autoComplete={'off'}
            />
            <Suffix data={FormData.options} title={NAMES.SUFFIX_TITLE} />
            <FormDate title={NAMES.DATE_TITLE} />
            <FormOptions data={FormData.gender} title={NAMES.GENDER_TITLE} />
            <Ssn title={NAMES.SSN_TITLE} />
          </div>
        </div>

      </Container>
    </div>
  );
};

export default AboutYourSelfForm;