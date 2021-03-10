import React, { useState } from "react";
import Header from "../../components/Header";
import FormData from "../../utils"
import useStyles from "../../pages/benefits/AboutYourselfPage.styles";
import StepConnector from "@material-ui/core/StepConnector";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import {
    makeStyles,
    withStyles,
} from "@material-ui/core/styles";

const styles = {
    width: "100%",
    height: "100%",
    // marginTop: "2px",
    top: "0px",
    left: "0px",
};
const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: "#ccc",
        zIndex: 1,
        color: "white",
        width: 40,
        height: 40,
        display: "flex",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        border: '2px solid #cdcdcd',
        '& img': {
            width: '30px',
            height: '30px'
        }
    },
    active: {
        backgroundColor: "#fff",
        border: '2px solid #FB8C00',
    },
    completed: {
        backgroundColor: "#FB8C00",
        border: '2px solid #FB8C00',

    },
});
const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 16,
    },
    active: {
        "& $line": {
            // backgroundImage:
            //   "linear-gradient( 136deg, rgb(15 114 188) 0%, rgb(15 114 188) 50%, rgb(15 114 188) 100%)",
            backgroundColor: "#FB8C00",
        },
    },
    completed: {
        "& $line": {
            // backgroundImage:
            //   "linear-gradient( 136deg, rgb(15 114 188) 0%, rgb(15 114 188) 50%, rgb(15 114 188) 100%)",
            backgroundColor: "#FB8C00",
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: "#CDCDD2",
        borderRadius: 1,
    },
})(StepConnector);

const StepperHead = (props) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <div style={styles}>
            <Header />
            <div className={classes.stepperBox}>
                <Stepper
                    activeStep={activeStep}
                    alternativeLabel
                    className={classes.stepper}
                    connector={<ColorlibConnector />}
                >

                    {FormData.stepperNames.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>
                                <span className={classes.stepLabel}>{label}</span>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>

        </div>
    );
};

export default StepperHead;