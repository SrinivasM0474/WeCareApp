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
    width: "100%",
  },
  adminHeader: {
    width: "50%",
  },
  backButton: {
    marginRight: theme.spacing(6),
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#EE5050",
    outline: "none !important",
  },
  nextButton: {
    marginRight: theme.spacing(6),
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#EE5050",
    outline: "none !important",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    marginLeft: "11%",
    width: "80%",
    backgroundColor: "#F8F8F8",
  },
  stepLabel: {
    fontSize: "7px !important",
  },
  greyBar: {
    height: "5px",
    backgroundColor: "#cecece",
  },
  stepperBox: {
    backgroundColor: "#F8F8F8",
  },
}));

export default useStyles;
