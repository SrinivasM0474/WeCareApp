import React, { useState, useEffect } from "react";
import AboutYourSelfForm from "../../forms/headOfHouseHold/aboutyourSelfForm";

const AboutYourSelf = (props) => {

  const formValidation = (errorsData) => {
    props.onFormControlChange(errorsData)

  }
  return (
    <div>
      <AboutYourSelfForm formValidation={formValidation} />
    </div>
  );
};

export default AboutYourSelf;