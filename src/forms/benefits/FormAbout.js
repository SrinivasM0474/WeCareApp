
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
import FormData from "../../utils"
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";


const FormAbout = (props) => {

  return (
    <div>
      <Container className="container" maxWidth="md">
        <div className="about-yourself">
          <FormHeader img={AppUser}
            headerTitle={ABOUT_YOURSELF_TITLE}
            alt={'image'} />
          <div className="input-form-fields">
            <FirstName
              placeHolderText={FIRST_NAME}
              autoComplete={'off'}
              icon={<FaceRoundedIcon className="icon" />}
            />
            <FirstName
              placeHolderText={MIDDLE_NAME}
              autoComplete={'off'} />
            <FirstName
              placeHolderText={LAST_NAME}
              autoComplete={'off'}
              icon={<RecordVoiceOverIcon className="icon" />}
            />
            <Suffix data={FormData.options} title={SUFFIX_TITLE} />
            <FormDate title={DATE_TITLE} />
            <FormOptions data={FormData.gender} title={GENDER_TITLE} />
            <Ssn title={SSN_TITLE} />
          </div>
        </div>

      </Container>
    </div>
  );
};

export default FormAbout;