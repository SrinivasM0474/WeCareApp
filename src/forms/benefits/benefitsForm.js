
import React, { useState } from "react";
import { Container, Grid } from '@material-ui/core/';
import BenefitsImage from './../../views/images/benefits-title-icon.png';
import WorkingParent from './../../views/images/workingparent.png';
import Typography from '@material-ui/core/Typography';
import * as NAMES from '../../constants';
import FormHeader from "../../components/FormComponents/FormHeader";

const BenefitsForm = (props) => {

    return (
        <Container>
            <div className="login-container">
                <Grid container spacing={3}>
                    <Grid item xs={12}>

                        <div className="new-app-s">
                            <FormHeader img={BenefitsImage}
                                headerTitle={NAMES.BENEFITS}
                                alt={'image'} />
                            <Typography variant="body1" className="" gutterBottom>
                                Please click on all of the benefits that one or more people in your household would like to apply for. If needed, we will ask you to tell us which person or people would like to apply for that benefit.
                                    </Typography>
                            <div className="data-container benefits">
                                <img src={WorkingParent} alt="Fill app" />
                                <Typography variant="h6" className="" component="h6" gutterBottom>
                                    Working Parents Assistance Program
                                        </Typography>
                                <Typography variant="body1" className="assprogram" gutterBottom>
                                    Parents complete an application for the WPA program and a caseworker determines eligibility, based on income.
                                    Families whose income is under scale for WPA will be referred to CCSCentral to complete an application for the state Child
Care Subsidy Program (CCS).                                        </Typography>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>

    );
};

export default BenefitsForm;