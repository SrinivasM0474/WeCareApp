import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 100,
    height: 100,
    borderColor: "blue",
  },
  gridItem: {
    borderColor: "green",
  },
  root: {
    marginTop: "4.5%",
    width: "80%",
  },
  adminHeader: {
    width: "50%",
  },
  backButton: {
    marginRight: theme.spacing(3),
    borderRadius: 4,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#EE5050",
    outline: "none !important",
    textTransform: "capitalize",
    fontFamily: "Roboto-Light",
    letterSpacing: "1px",
    padding: '6px 20px 6px 10px',
    minWidth: '64px'
  },
  nextButton: {
    // marginRight: theme.spacing(6),
    borderRadius: 4,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#EE5050",
    outline: "none !important",
    textTransform: "capitalize",
    fontFamily: "Roboto-Light",
    letterSpacing: "1px",
    padding: '6px 10px 6px 20px',
    minWidth: '64px'
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    marginBottom: theme.spacing(2),
    paddingBottom: "20px",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    // marginLeft: "11%",
    // width: "80%",
    // backgroundColor: "#F8F8F8",
    width: "70%",
    backgroundColor: "#F8F8F8",
    margin: "auto",
    padding: "24px 0",
  },
  stepLabel: {
    fontSize: "10px !important",
    fontFamily: "Roboto-Regular",
    margin: "0px",
    color: "#bdbdbd",
  },
  greyBar: {
    height: "5px",
    backgroundColor: "#cecece",
  },
  stepperBox: {
    backgroundColor: "#F8F8F8",
    '& .MuiStepConnector-alternativeLabel': {
      right: "calc(50 % + 20px)",
      position: "absolute",
      width: "100%",
      left: "calc(50% - 65px)"
    }
  },
}));

export default useStyles;
