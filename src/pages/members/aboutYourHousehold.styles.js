import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootGrid: { marginRight: "100px", marginLeft: "0px", marginTop: "10px" },

  margin: {
    // margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
  },
  extraAddressTitle: {
    margin: "10px 0",
  },
}));

export default useStyles;
