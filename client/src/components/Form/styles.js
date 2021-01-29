import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: 10,
  },
  fileInput: {
    width: "95%",
    margin: "8px 0px 14px 0px",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
